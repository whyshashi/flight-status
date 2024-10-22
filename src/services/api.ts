import { Flight, FlightDetail } from '../types/Flight';

const API_BASE_URL = 'https://flight-status-mock.core.travelopia.cloud';

export async function getFlights(): Promise<Flight[]> {
  const response = await fetch(`${API_BASE_URL}/flights`);
  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }
  return response.json();
}

export async function getFlightDetail(id: string): Promise<FlightDetail> {
  const response = await fetch(`${API_BASE_URL}/flights/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch flight details');
  }
  return response.json();
}
