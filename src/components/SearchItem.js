import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "./Data";
import Products from "./Products";

const SearchItem = ({cart, setCart}) => {
  const { term } = useParams();
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = product.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchFilter(data);
    };
    filterData();
  }, [term]);
  return <Products product={searchFilter} cart={cart} setCart={setCart} />;
};

export default SearchItem;
