import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { product } from "./Data";
import { BsCart4 } from "react-icons/bs";

const NavBar = ({ setData, cart }) => {
  const [search, setSearch] = useState("");
  const [isLoging, setIsLoging] = useState(true);
  const nevigate = useNavigate();
  const location = useLocation();

  const filterCategory = (category) => {
    const filtered = product.filter((p) => p.category === category);
    setData(filtered);
  };
  const filterByPrice = (price) => {
    const filteredPrice = product.filter((p) => p.price >= price);
    setData(filteredPrice);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    nevigate(`/search/${search}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoging(false);
    nevigate("/login");
  };
  return (
    <header className="sticky-top">
      <div className="navbar">
        <Link to={"/"} className="brand">
          Online Shop
        </Link>
        <form className="searchbar" onSubmit={searchHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name=""
            id=""
            placeholder="Search Products"
          />
        </form>
        {isLoging ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-info">Login</button>
        )}

        {/* <Link to={""} className="cart">
          {userName.name}
        </Link> */}
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
            <BsCart4 style={{ fontSize: "1.2rem" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </button>
        </Link>
      </div>
      {location.pathname === "/" && (
        <div className="sub-navbar">
          <div className="items">Filter by {"->"}</div>
          <div className="items" onClick={() => setData(product)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterCategory("mobiles")}>
            Mobile
          </div>
          <div className="items" onClick={() => filterCategory("laptops")}>
            Laptop
          </div>
          <div className="items" onClick={() => filterCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {"->"}29999
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {"->"}49999
          </div>
          <div className="items" onClick={() => filterByPrice(69999)}>
            {"->"}69999
          </div>
          <div className="items" onClick={() => filterByPrice(89999)}>
            {"->"}89999
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
