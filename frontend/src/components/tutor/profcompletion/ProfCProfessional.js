import React, { useState } from 'react';

const ProfCProfessional = () => {
  const [degreeFields, setDegreeFields] = useState([{ degree: '', document: null }]);

  const handleAddDegree = () => {
    setDegreeFields([...degreeFields, { degree: '', document: null }]);
  };

  const handleDegreeChange = (index, value) => {
    const updatedFields = [...degreeFields];
    updatedFields[index].degree = value;
    setDegreeFields(updatedFields);
  };

  const handleDocumentUpload = (index, file) => {
    const updatedFields = [...degreeFields];
    updatedFields[index].document = file;
    setDegreeFields(updatedFields);
  };

  return (
    <div className="educational-details-form-container">
    <div className="educational-details-form">
      <h2>Educational Details</h2>
      {degreeFields.map((field, index) => (
        <div key={index}>
            <label >
                Degree:
          <input
            type="text"
            value={field.degree}
            onChange={(e) => handleDegreeChange(index, e.target.value)}
            placeholder="Degree"
          />
          </label>
          <label >
            Upload documets regarding particular degree:
          <input
            type="file"
            onChange={(e) => handleDocumentUpload(index, e.target.files[0])}
            placeholder="Degree Document"
          />
          </label>
        </div>
      ))}
      <button onClick={handleAddDegree}>+</button>
    </div>
  </div>
);
};

export default ProfCProfessional;
