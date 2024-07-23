import React, { useState } from "react";
import style from "./search.module.css";
import data from "../../const/input-data";
import Title from "../Title/Title";
function Search() {
  let [search, setSearch] = useState({
    name: "",
    product: "",
    country: "",
  });
  let [searchs, setSearchs] = useState([]);
  let [alert, setAlert] = useState("");
  let changeHandeler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setSearch((search) => ({ ...search, [name]: value }));
  };
  let submitHandeler = (event) => {
    event.preventDefault();
    if (!search.name || !search.product || !search.country) {
      alert("please enter valid data ");
    }
    setAlert("");
    console.log(searchs);
    setSearchs((searchs) => [...searchs, search]);
    setSearch({
      name: "",
      product: "",
      country: "",
    });
  };

  return (
    <div>
      <Title title="Search"  width="18.7rem" />
      <form action="" onSubmit={submitHandeler} className={style.form}>
        {data.map((item) => (
          <input
            key={item.id}
            type={item.placeholder}
            placeholder={item.placeholder}
            name={item.name}
            value={search[item.name]}
            onChange={changeHandeler}
          />
        ))}
        <div>
          <button className={style.btnSearch} type="submit">
            search
          </button>
          <button className={style.btnApply}>Apply Special Tags</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
