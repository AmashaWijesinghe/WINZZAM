//create the components needed for the frontend
//create the components needed for each actor in different files and let's create a common file to include the components that are used by all actors

import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar