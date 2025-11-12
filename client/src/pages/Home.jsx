// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getStaff, deleteStaff } from '../services/api';
import AddStaff from '../components/AddStaff';

const Home = () => {
  const [staff, setStaff] = useState([]);

  // Fetch staff from backend
  const fetchStaff = async () => {
    try {
      const res = await getStaff();
      setStaff(res.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // Delete staff member
  const handleDelete = async (id) => {
    try {
      await deleteStaff(id);
      setStaff(staff.filter(s => s._id !== id));
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Staff List</h1>

      {/* Add staff form */}
      <AddStaff fetchStaff={fetchStaff} />

      {/* Display staff */}
      {staff.length === 0 ? (
        <p>No staff available</p>
      ) : (
        <ul>
          {staff.map((s) => (
            <li key={s._id} style={{ marginBottom: '10px' }}>
              {s.name} - {s.position}
              <button
                onClick={() => handleDelete(s._id)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
