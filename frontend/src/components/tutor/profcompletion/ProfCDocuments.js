import React, { useState } from 'react';

const ProfCDocuments = () => {
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState('');

  return (
    <div className="other-details-form-container">
      <div className="other-details-form">
        <h2>Other Details</h2>
        <label>
            Additional detail:
        <textarea
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="Additional Details"
        />
        </label>
        <label>
            Social media links:
        <textarea
          value={socialMediaLinks}
          onChange={(e) => setSocialMediaLinks(e.target.value)}
          placeholder="Social Media Links"
        />
        </label>
        
      </div>
    </div>
  );
};

export default ProfCDocuments;
