import '../css/navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className="navbar-container content-padding">
        <h1 className="nav-title">Urban Willow</h1>
        <ul className='nav-link-container'>
          <li className="nav-link">Home</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Book Appointment</li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;