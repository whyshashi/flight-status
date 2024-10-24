
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
        <th>Departure</th>
        <th>Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {flights.map((flight: Flight) => {
  let stat: string = '';

 
  if (flight.status === "On Time") {
    stat = "bluec";
  } else if (flight.status === "Delayed") {
    stat = "redc";
  } else if (flight.status === "Boarding") {
    stat = "greenc";
  } else {
    stat = "yellowc";
  }

 
  return (
    <tr key={flight.id}>
      <td data-label="Flight Number">{flight.flightNumber}</td>
      <td data-label="Airline">{flight.airline}</td>
      <td data-label="Origin">{flight.origin}</td>
      <td data-label="Destination">{flight.destination}</td>
      <td data-label="Departure Time">
        {flight.departureTime.slice(11, 16)}, {flight.departureTime.slice(0, 10)}
      </td>
      <td data-label="Status" className='tdstatus'>
        <span className={stat}></span>{flight.status}
      </td>
      <td data-label="Details">
        <Link to={`/flight/${flight.id}`}>View</Link>
      </td>
    </tr>
  );
})}
    </tbody>
  </table>
</div>

  );
}
