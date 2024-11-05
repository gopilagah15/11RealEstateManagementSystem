// components/MarketAnalysisReport.js
import React from 'react';

const MarketAnalysisReport = ({ properties }) => {
  const saleProperties = properties.filter((prop) => prop.type === 'Sale');
  const rentProperties = properties.filter((prop) => prop.type === 'Rent');

  const avgSalePrice = saleProperties.reduce((acc, prop) => acc + parseFloat(prop.price), 0) / saleProperties.length || 0;
  const avgRentPrice = rentProperties.reduce((acc, prop) => acc + parseFloat(prop.price), 0) / rentProperties.length || 0;

  return (
    <div>
      <h2>Market Analysis Report</h2>
      <p>Properties for Sale: {saleProperties.length}</p>
      <p>Properties for Rent: {rentProperties.length}</p>
      <p>Average Sale Price: ${avgSalePrice.toFixed(2)}</p>
      <p>Average Rent Price: ${avgRentPrice.toFixed(2)}</p>
    </div>
  );
};

export default MarketAnalysisReport;
