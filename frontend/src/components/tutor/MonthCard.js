import React, { useState, useEffect } from "react";
import styles from "./MonthCard.module.css";
import empty from "../../assets/empty.jpg";




const ProductCardContainer = ({ name, totalexams, price ,id ,handleButtonClick}) => {
  const abbreviatedName = name.slice(0, 3);
  return (
    <div className={styles.productCardContainer}>
    <h2 className={styles.productCardTitle}>{abbreviatedName}</h2>
    <p className={styles.productCardInfo}>Total Exams: {totalexams}</p>
    <p className={styles.productCardInfo}>Price: Rs{price}</p>
    <div className={styles.productCardButtonContainer}>
        <button
          className={styles.productCardButton}
          onClick={() => handleButtonClick(id)}
          >

          View
        </button>
      </div>
  </div>
  );
};

// const handleButtonClick = () => {
//   onViewClick(id); // Call the onViewClick function with the month's id
// };

const MonthCard = ({ selectedBatchId, setIsMonthClick, setSelectedMonth }) => {
  // const totalExams = exams.length;

  const [monthDetails, setMonthDetails] = useState(null);


  const handleButtonClick = (id) => {

    setSelectedMonth(id)
    setIsMonthClick(true)
    console.log("Hi")
  }


  useEffect(() => {
    // Fetch additional data for the month from the backend when the component mounts

    fetch(`/api/tuition_master/getmonths/${selectedBatchId}`, {
      method: "GET",
      headers: {
        // Add any necessary headers here
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMonthDetails(data.months);
        console.log(monthDetails);
      })
      .catch((error) => {
        console.error(`Error fetching month details for :`, error);
      });
  }, [selectedBatchId]);

  return (

    <div className={styles.overflowYScroll}>
      {monthDetails && monthDetails.length > 0 ? (
        <div className={styles.gridContainer}>
          {monthDetails.map((month, index) => (
            <div key={month._id}>
              <ProductCardContainer
                name={month.name}
                price={month.fee}
                totalexams={month.exams.length}
                id={month._id}
                handleButtonClick={handleButtonClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noMonthsContainer}>
          <img src={empty} alt="No months" className={styles.image} />
           <p className={styles.text}>No months to display</p> 
        </div>
      )}
    </div>
  );
};

export default MonthCard;
