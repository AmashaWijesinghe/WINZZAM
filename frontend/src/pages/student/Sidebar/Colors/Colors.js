import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Medium</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Sinhala"
          title="Sinhala"
          name="test1"

        />

        <Input
          handleChange={handleChange}
          value="English"
          title="English"
          name="test1"

        />

        <Input
          handleChange={handleChange}
          value="Tamil"
          title="Tamil"
          name="test1"

        />
      </div>
    </>
  );
};

export default Colors;