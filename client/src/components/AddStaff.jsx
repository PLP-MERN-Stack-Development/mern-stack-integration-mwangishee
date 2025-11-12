import React, { useState } from 'react';
import { addStaff } from '../services/api';

const AddStaff = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStaff({ name, position });
      alert('Staff added!');
      setName('');
      setPosition('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Staff</button>
    </form>
  );
};

export default AddStaff;
