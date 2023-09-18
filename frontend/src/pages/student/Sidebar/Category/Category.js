import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Subjects</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Physics"
          title="Physics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Chemistry"
          title="Chemistry"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Biology"
          title="Biology"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="IT"
          title="IT"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;