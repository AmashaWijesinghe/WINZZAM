import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Batches</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Classes" />
          <Button onClickHandler={handleClick} value="Nike" title="2023" />
          <Button onClickHandler={handleClick} value="Adidas" title="2024" />
          <Button onClickHandler={handleClick} value="Puma" title="2025" />
        </div>
      </div>
    </>
  );
};

export default Recommended;