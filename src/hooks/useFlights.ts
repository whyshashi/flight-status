import { useState, useEffect } from 'react';
import { Flight } from '../types/Flight';
import { getFlights } from '../services/api';

export function useFlights(refreshInterval: number = 10000) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await getFlights();
        setFlights(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch flights. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { flights, loading, error };
}
