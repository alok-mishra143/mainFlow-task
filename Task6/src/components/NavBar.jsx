import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <p>AI Gallery</p>

        <div>
          <ul>
            <li>About</li>
          </ul>
        </div>

        <div className="contact">Contact Us</div>
      </nav>
    </div>
  );
};

export default NavBar;
