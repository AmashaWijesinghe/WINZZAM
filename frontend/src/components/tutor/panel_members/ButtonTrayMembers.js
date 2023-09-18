
import ConfirmationModal from "../common/ConfirmationModal";
import { useState } from "react";

const ButtonTrayMembers = (props) => {

    const { holdFunction, removeFunction, buttonStatus, holdButtonText } = props;

    const [showModal, setShowModal] = useState(false);
    const [handleConfirm, setHandleConfirm] = useState(null);

    const handleHold = () => {
        if (buttonStatus === 1) {
            setShowModal(true);
            setHandleConfirm(holdFunction);
        }
    }

    const handleRemove = () => {
        if (buttonStatus === 1) {
            setShowModal(true);
            setHandleConfirm(removeFunction);
        }
    }
    const handleClose = () => setShowModal(false);

    return (
        <div class="buttons_pm">
            <div>
                <button type="button" class="btn btn-primary pm-b" onClick={handleHold}>{holdButtonText}</button>
                {showModal && <ConfirmationModal
                    handleClose={handleClose}
                    handleConfirm={handleConfirm}
                    message="Are you sure you want to take this action regarding your panel member?"
                />}
                <button type="button" class="btn btn-primary pm-b" onClick={handleRemove}>Remove</button>

            </div>
        </div>
    )
}

export default ButtonTrayMembers