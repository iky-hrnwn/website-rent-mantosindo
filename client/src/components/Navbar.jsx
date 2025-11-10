import { Link } from "react-router-dom";

const Navbar = () => {
  const menuLinks = ["Home", "About", "Contact"];

  return <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 relative transition-all">
    <Link to="/" className="flex items-center leading-tight">
      <img src="/logopt.png" alt="logo" className="h-13"/>
      <div className="">
        <h1 className="font-bold">MANTOSINDO</h1>
        <h1>MULTIMEDIA</h1>
      </div>
    </Link>

    <div className="z-50 transition-all duration-300">
      {menuLinks.map((link) => (
        <Link key={link} to={`/${link.toLowerCase()}`} className="mx-4">
          {link}
        </Link>
      ))}
    </div>
  </div>;
};

export default Navbar;
