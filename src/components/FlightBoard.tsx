
import { Link } from 'react-router-dom';
import { useFlights } from '../hooks/useFlights';
import { Flight } from '../types/Flight';
import './FlightBoard.style.css'

export function FlightBoard() {
  const { flights, loading, error } = useFlights();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="table-container">
  <table className='board-table'>
    <thead>
      <tr>
        <th>Flight Number</th>
        <th>Airline</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Departure Time</th>
        <th>Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {flights.map((flight: Flight) => (
        <tr key={flight.id}>
          <td data-label="Flight Number">{flight.flightNumber}</td>
          <td data-label="Airline">{flight.airline}</td>
          <td data-label="Origin">{flight.origin}</td>
          <td data-label="Destination">{flight.destination}</td>
          <td data-label="Departure Time">{flight.departureTime.slice(11,16)}</td>
          <td data-label="Status">{flight.status}</td>
          <td data-label="Details">
            <Link to={`/flight/${flight.id}`}>View Details</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
