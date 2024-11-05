// components/ViewingAppointmentAlerts.js
import React, { useEffect, useState } from 'react';

const ViewingAppointmentAlerts = ({ appointments }) => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    const now = new Date();
    const soonAppointments = appointments.filter((app) => {
      const appointmentDate = new Date(app.date);
      return appointmentDate > now && (appointmentDate - now) <= 3 * 24 * 60 * 60 * 1000; // Within 3 days
    });
    setUpcomingAppointments(soonAppointments);
  }, [appointments]);

  return (
    <div>
      <h2>Viewing Appointment Alerts</h2>
      <ul>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((app, index) => (
            <li key={index}>
              Viewing at {app.property}: {app.date}
            </li>
          ))
        ) : (
          <li>No upcoming appointments</li>
        )}
      </ul>
    </div>
  );
};

export default ViewingAppointmentAlerts;
