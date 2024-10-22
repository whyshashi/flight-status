import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FlightDetail as FlightDetailType } from '../types/Flight';
import { getFlightDetail } from '../services/api';
import './FlightDetail.style.css';

export function FlightDetail() {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<FlightDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightDetail = async () => {
      try {
        const data = await getFlightDetail(id);
        // console.log(data);
        setFlight(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch flight details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!flight) return <div>Flight not found</div>;

  return (
    <div className="flight-details-container">
  <h2>Flight Details</h2>
  <div className='flight-details-inner'>


  <table >
  <tr>
    <td >Flight Number</td>
    <td >{flight.flightNumber}</td>
  </tr>
  <tr>
    <td >Airline</td>
    <td >{flight.airline}</td>
  </tr>
  <tr>
    <td >Origin</td>
    <td >{flight.origin}</td>
  </tr>
  <tr>
    <td >Destination</td>
    <td >{flight.destination}</td>
  </tr>
  <tr>
    <td >Departure Date</td>
    <td >{flight.departureTime.slice(0,10)}</td>
  </tr>
  <tr>
    <td >Departure Time</td>
    <td >{flight.departureTime.slice(11,16)} LST</td>
  </tr>
  <tr>
    <td >Status</td>
    <td >{flight.status}</td>
  </tr>
</table>


  <Link to="/" className="back-link">Back to Flight Board</Link>
  </div>
  
</div>

  );
}
