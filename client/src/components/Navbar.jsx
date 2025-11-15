import { Link, useNavigate } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const menuLinks = ["Home", "About", "Contact"];
  const navigate = useNavigate()
  
  return <div className="flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 relative transition-all mb-3">
    {/* Navigation link */}
    <div className="flex items-center justify-end text-[12px] py-3 mb-1 border-[#BFBFBF]">
      <div className="z-50 text-[#8C8C8C] transition-all duration-300">
        {menuLinks.map((link) => (
          <Link key={link} to={`/${link.toLowerCase()}`} className="mx-4 hover:text-[#262626]">
            {link}
          </Link>
        ))}
      </div>

      <span className="h-4 w-px bg-[#262626] mr-3"></span>

      <div className="flex gap-2 text-[#262626]">
        <button onClick={()=> navigate('/owner')} className="cursor-pointer hover:text-black">Dashboard</button>
        <button onClick={()=> setShowLogin(true)} className="cursor-pointer hover:text-black">Login</button>
      </div>
    </div>
    
    {/* Navigation Search */}         
    <div className="flex justify-between flex-wrap">
      <Link to="/" className="flex items-center leading-tight">
        <img src="/logo.svg" alt="logo" className="h-10"/>
      </Link>

      <div className="flex items-center border border-[#F2F2F2]">
          <img src="/search.svg" alt="search" className="h-8"/>
          <input type="text" className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] mx-2 outline-none text-[11px] placeholder-[#BFBFBF]" placeholder="Search Products..." />
      </div>
      <img src="/cart.svg" alt="cart" />
    </div>
  </div>
};

export default Navbar;
