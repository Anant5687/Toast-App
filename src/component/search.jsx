import React, { useMemo, useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  const doctorsList = useMemo(() => {
    if (value) {
      return [
        {
          id: 1,
          name: 'Dr. Anant Jindal',
          specialization: 'Cardiologist',
          city: 'Delhi',
        },
        {
          id: 2,
          name: 'Dr. Rahul Sharma',
          specialization: 'Dermatologist',
          city: 'Mumbai',
        },
        {
          id: 3,
          name: 'Dr. Sneha Gupta',
          specialization: 'Neurologist',
          city: 'Bangalore',
        },
        {
          id: 4,
          name: 'Dr. Ritesh Mehta',
          specialization: 'Orthopedic',
          city: 'Hyderabad',
        },
        {
          id: 5,
          name: 'Dr. Neha Patel',
          specialization: 'Pediatrician',
          city: 'Pune',
        },
        {
          id: 6,
          name: 'Dr. Arjun Singh',
          specialization: 'Oncologist',
          city: 'Delhi',
        },
        {
          id: 7,
          name: 'Dr. Priya Nair',
          specialization: 'Psychiatrist',
          city: 'Chennai',
        },
        {
          id: 8,
          name: 'Dr. Varun Kapoor',
          specialization: 'Cardiologist',
          city: 'Kolkata',
        },
        {
          id: 9,
          name: 'Dr. Kavita Joshi',
          specialization: 'Endocrinologist',
          city: 'Mumbai',
        },
        {
          id: 10,
          name: 'Dr. Aditya Malhotra',
          specialization: 'General Physician',
          city: 'Noida',
        },
        {
          id: 11,
          name: 'Dr. Sanjay Tiwari',
          specialization: 'ENT Specialist',
          city: 'Lucknow',
        },
        {
          id: 12,
          name: 'Dr. Meera Rajan',
          specialization: 'Gynecologist',
          city: 'Chennai',
        },
        {
          id: 13,
          name: 'Dr. Rohan Verma',
          specialization: 'Nephrologist',
          city: 'Bangalore',
        },
        {
          id: 14,
          name: 'Dr. Shreya Das',
          specialization: 'Pulmonologist',
          city: 'Kolkata',
        },
        {
          id: 15,
          name: 'Dr. Vishal Bhatt',
          specialization: 'Radiologist',
          city: 'Ahmedabad',
        },
      ].filter(
        (ele) =>
          ele?.name?.toLowerCase()?.includes(value?.toLowerCase()) ||
          ele?.city?.toLowerCase()?.includes(value?.toLowerCase()) ||
          ele?.specialization?.toLowerCase()?.includes(value?.toLowerCase())
      );
    } else {
      return [];
    }
  }, [value]);

  return (
    <div>
      <input
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search by name, city or specialization"
      />
      <ul>
        {doctorsList?.map((ele, i) => (
          <li key={i}>
            <span onClick={() => setValue(ele?.name)}>{ele?.name}</span> <br />
            <span onClick={() => setValue(ele?.city)}>{ele?.city}</span> <br />
            <span onClick={() => setValue(ele?.specialization)}>
              {ele?.specialization}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
