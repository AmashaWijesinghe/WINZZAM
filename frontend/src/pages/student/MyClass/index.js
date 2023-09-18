import React from "react";
import styles from "./styles.module.css";


const StudentMyClasses= (()=>{
    return(
        <div className={styles.main_container}>
            <div className={styles.class_list}>
                    <div className={styles.class_list_heading}>
                         <h2>My Classes</h2>
                    </div>
                    <div className = {styles.class_list_container}>
                           

                            
                    </div>
            </div>
            <div className={styles.class_details}>
                    data item 
            </div>
        </div>
    )
});


export default StudentMyClasses;