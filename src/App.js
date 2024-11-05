// App.js
import React, { useState, useEffect } from 'react';
 
import ViewingAppointmentAlerts from './components/ViewingAppointmentAlerts';
import LeaseAgreementGenerator from './components/LeaseAgreementGenerator';
import MarketAnalysisReport from './components/MarketAnalysisReport';
import PropertyListingForm from './components/PropertyListingForm';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  const addProperty = (property) => setProperties([...properties, property]);
  const addAppointment = (appointment) => setAppointments([...appointments, appointment]);

  return (
    <div>
      <h1>Real Estate Management System</h1>
      <PropertyListingForm onAddProperty={addProperty} />
      <ViewingAppointmentAlerts appointments={appointments} />
      <LeaseAgreementGenerator properties={properties} />
      <MarketAnalysisReport properties={properties} />
    </div>
  );
};

export default App;
