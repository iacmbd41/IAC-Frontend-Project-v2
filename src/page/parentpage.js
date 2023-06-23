import React, { useState } from 'react';
import ChildComponent from './chieldpage';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
     <p>Data from Child Component: {dataFromChild}</p>
      <h2>Parent Component</h2>
      <ChildComponent sendDataToParent={handleDataFromChild} />
     
    </div>
  );
}
// function ParentComponent() {
//     const [formData, setFormData] = useState({});
  
//     const handleDataFromChild = (data) => {
//       setFormData(data);
//     };
  
//     return (
//       <div>
//         <h2>Parent Component</h2>
//         <ChildComponent onDataUpdate={handleDataFromChild} />
//         <p>Data from Child Component:</p>
//         <ul>
//           {Object.keys(formData).map((key) => (
//             <li key={key}>{`${key}: ${formData[key]}`}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

export default ParentComponent;
