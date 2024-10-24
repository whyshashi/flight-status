# Real-Time Flight Status Board

This project is a React-based application developed with TypeScript, which mimics a real-time flight status board. The application retrieves flight details from a given API, updates the data at regular intervals, and allows users to view more detailed information about specific flights.

## Features

### 1. Flight Table (Main Page)
- The main page displays a list of flights in a table format with the following columns:
  - **Flight Number**
  - **Airline**
  - **Origin**
  - **Destination**
  - **Departure Time**
  - **Status** (e.g., "On Time", "Delayed", "Boarding", "Departed")
- The application fetches flight data from the provided API and updates the flight statuses at regular intervals (e.g., every `10 seconds`).
  
### 2. Detailed Flight View
- Clicking on a row in the flight table will navigate the user to a detailed view of the selected flight.
- The detailed view will fetch and display comprehensive information about that particular flight, including (but not limited to):
  - Flight Number
  - Airline
  - Origin
  - Destination
  - Departure and Arrival Times
  - Gate Information


### 3. Navigation (React Router)
- The application uses **React Router** for seamless navigation between the flight status board and the detailed flight view.
- Each flight will have its own unique route to display detailed information.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **React Router**: For handling navigation between pages.
- **Axios**: For making HTTP requests to fetch flight data from the API.
- **CSS**: For basic styling of the flight table and detail views.
- **Hooks (useEffect, useState)**: For handling state management and side effects like fetching data.



## Run Locally

Clone the project

```bash
  git clone https://github.com/whyshashi/flight-status.git
```

Go to the project directory

```bash
  cd flight-status
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

The application should now be running on http://localhost:3000 in your browser.

# Deployed Link
- https://flight-status-page.vercel.app/

# Presentation Video Link

- https://youtu.be/HS_lTcX0fOA

# FAQ

### Is the website optimized for mobile devices?

Yes, the website is fully responsive and optimized for a seamless experience across all devices, including desktops, tablets, and smartphones.

### What is the deployment process for the website?

The website is deployed using a CI/CD pipeline through GitHub Actions, with automatic deployment to a cloud provider (Vercel) whenever changes are pushed to the main branch.

