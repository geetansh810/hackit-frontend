import React, { useState } from 'react';
import '../css/Form.css';

function PersonalForm({ onSave, data ,next}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
    next();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <h1 className='fs-title'>Personal Details</h1>
    <h4 className='fs-subtitle'></h4>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} max={99} required />
      </div>


      <div>
        <label htmlFor="email">Email Id:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" value={formData.phoneNumber} onChange={handleChange} maxLength={10} required /><br></br>
      </div>

      <div>
        <label htmlFor="age">Roll Number</label>
        <input type="text" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} />
      </div>


      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
      </div>

      <div className='savebtn'>
      <input className='saveButton' type="submit" value="Save & Next" />
      </div>
    </form>
    
    </>
  );
}

export default PersonalForm;
