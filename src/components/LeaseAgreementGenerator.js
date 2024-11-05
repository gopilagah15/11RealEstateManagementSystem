// components/LeaseAgreementGenerator.js
import React, { useState } from 'react';

const LeaseAgreementGenerator = ({ properties }) => {
  const [leaseDetails, setLeaseDetails] = useState(null);

  const generateLease = (propertyId) => {
    const property = properties[propertyId];
    const lease = {
      propertyTitle: property.title,
      rentalPrice: property.price,
      duration: '12 months',
      agreementDate: new Date().toLocaleDateString()
    };
    setLeaseDetails(lease);
  };

  return (
    <div>
      <h2>Lease Agreement Generator</h2>
      <select onChange={(e) => generateLease(e.target.value)}>
        <option value="">Select Property</option>
        {properties.map((prop, index) => (
          <option key={index} value={index}>{prop.title}</option>
        ))}
      </select>
      {leaseDetails && (
        <div>
          <h3>Lease Agreement</h3>
          <p>Property: {leaseDetails.propertyTitle}</p>
          <p>Price: ${leaseDetails.rentalPrice}</p>
          <p>Duration: {leaseDetails.duration}</p>
          <p>Agreement Date: {leaseDetails.agreementDate}</p>
        </div>
      )}
    </div>
  );
};

export default LeaseAgreementGenerator;
