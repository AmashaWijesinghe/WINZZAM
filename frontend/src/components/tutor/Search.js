import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import the Cookies library
import styles from "./Search.module.css"; // Import the CSS module

const Search = ({ onMonthFormToggle, setSelectedBatchId }) => {
  const [selectedBatchYear, setSelectedBatchYear] = useState("");
  const [batchYears, setBatchYears] = useState([]);
  const [isActive,setIsActive] = useState(false);
  const [filter, setFilter] = useState('');

/*   const [selectedBatchId, setSelectedBatchId] = useState(null);
 */  const [showMonthForm, setShowMonthForm] = useState(false); 

  // Retrieve the token from cookies
  const token = Cookies.get("token");
  console.log(token); // Replace 'token' with the name of your cookie
  useEffect(() => {
    // Make an API request to fetch the batch years associated with the tuition master.
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint.
    fetch("/api/tuition_master/getbatches", {
      method: "GET",
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data.batches); // Log the response data
        //console.log('Batch Years:', data.batchYears); // Log batch years here

        // Assuming your API response is an array of batch years, update the state.
        setBatchYears(data.batches);
        setSelectedBatchId(data.batches[0]._id);
      })
      .catch((error) => {
        console.error("Error fetching batch years:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  const handleBatchYearChange = (event) => {


    const selectedYear = event.target.value;
    setSelectedBatchYear(selectedYear);
    /* console.log(selectedYear) */

    /* const batchId = getBatchId(selectedYear);
    setSelectedBatchId(batchId); */
    // Assuming each batch object has an 'id' property, find the batch with the selected year
  const selectedBatch = batchYears.find((batch) => batch.year === parseInt(selectedYear));
   console.log(selectedBatch) 
  if (selectedBatch) {
    setSelectedBatchId(selectedBatch._id);
    console.log(selectedBatch._id)
  } else {
    setSelectedBatchId(null); // Reset the batch ID if no batch is selected

  }
    
    if (parseInt(selectedYear) === 2023) {
      setIsActive(true);
    } else {
     setIsActive(false);
    }
  };

  const handleCreateMonthClick = (batchId) => {
    setShowMonthForm(true);
    onMonthFormToggle(); // Notify the Dashboard component to show the form overlay

  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
};
/* const [filter, setFilter] = useState('');
 */

return (
  <header>
    <div className={styles.container_topbar_am }>
      <div className={styles.fl_am}>
        <div>
          <p className={styles["card-user-name-pm-x"]}>Months</p>
        </div>
      </div>
      <div className={styles.container_topbar_am}>
        <div className={styles["dropdown-container"]}>
          <select
            className={styles["custom-select"]}
            value={selectedBatchYear}
            onChange={handleBatchYearChange}
          >
            {batchYears.map((batch) => (
              <option key={batch.id} value={batch.year}>
                {batch.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {isActive ? (
        <div className={styles.container_topbar_am}>
          <div className={styles["dropdown-container"]}>
            <select
              className={styles["custom-select"]}
              onChange={handleFilterChange}
            >
              <option value="option">Upcoming Months</option>
              <option value="option">Previous Months</option>
            </select>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>

    <div className={styles.left + " d-flex px-2"}>
    <button
        className={styles["btn"] + " " + styles["btn-primary"] + " " + styles["pm-z"]}
        onClick={handleCreateMonthClick}
      >
        Create a New Month
      </button>
    </div>
  </header>
);

};

export default Search;