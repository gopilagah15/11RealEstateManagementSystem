// components/PropertyListingForm.js
import React, { useState } from 'react';

const PropertyListingForm = ({ onAddProperty }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Rent');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = { title, price, location, type };
    onAddProperty(newProperty);
    setTitle('');
    setPrice('');
    setLocation('');
    setType('Rent');
  };

  return (
    <div>
      <h2>Property Listing Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Property Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
        </select>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default PropertyListingForm;
