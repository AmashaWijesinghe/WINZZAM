import { useState , useEffect} from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import MyClass from "./MyClassPage.js"
import "./index.css";

function ClassFilteringPage({token}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openMyClass, setOpenMyClass]  = useState(null)
  const [openDashboard , setOpenDashboard] = useState(true);
  console.log(openMyClass);
  // const [products , setProducts] = useState([]);


  // useEffect(() => {
  //   // Use the relative URL to make the request to your Express server
  //   fetch('/api/student/getpaperclasses')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error('Fetch Error:', error);
  //     });
  // }, []);


  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
  
      filteredProducts = filteredProducts.filter(
        ({ subject, color, company, newPrice, title }) =>
          subject === selected ||
          color === selected ||
          company === selected ||
          (newPrice && Number(newPrice) > Number(selected) - 500 && Number(newPrice) < Number(selected)) || // Check if newPrice is smaller
          title === selected
      );      
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {!openMyClass &&  <Sidebar handleChange={handleChange} /> }

      <Navigation query={query} handleInputChange={handleInputChange} setOpenMyClass={setOpenMyClass} />
      {!openMyClass &&  <Recommended handleClick={handleClick} /> }
      {!openMyClass &&  <Products result={result} /> }

      {openMyClass && <MyClass token={token} />}
    </>
  );
}

//Sachi14125$

export default ClassFilteringPage