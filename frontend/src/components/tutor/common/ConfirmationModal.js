import styles from "../Modal.module.css";
// import { RiCloseLine } from "react-icons/ri";

const ConfirmationModal = ({ handleClose, message }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h1>Confirmation</h1>
                <p>{message}</p>
                <div className={styles.modalFooter}>
                    <button type="button" class="btn btn-primary pm-b" onClick={handleClose}>Cancel</button>
                    <button type="button" class="btn btn-primary pm-b">Confirm</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal
