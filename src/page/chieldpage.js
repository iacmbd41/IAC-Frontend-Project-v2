import React, { useState } from 'react';

function ChildComponent({ sendDataToParent }) {
  const [data, setData] = useState('');

  const handleDataChange = (e) => {
    setData(e.target.value);
    sendDataToParent(e.target.value);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={data} onChange={handleDataChange} />
    </div>
  );
}

// function ChildComponent({ onDataUpdate }) {
//     const [formData, setFormData] = useState({});
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//       onDataUpdate(formData);
//     };
//   console.log(formData);
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName || ''}
//           onChange={handleInputChange}
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName || ''}
//           onChange={handleInputChange}
//           placeholder="Last Name"
//         />
//       </div>
//     );
//   }

export default ChildComponent;
