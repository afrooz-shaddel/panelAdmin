import React from "react";
import { IoMdExit } from "react-icons/io";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={style.listStyle}>
      <div>
        <li>
          <NavLink to="/tag"> TAGS MANAGEMENT</NavLink>
        </li>
        <li>
          <NavLink to="/user"> USER MANAGEMENT</NavLink>
        </li>
        <li>
          <NavLink to="/"> ADMIN PANELT</NavLink>
        </li>
      </div>
      <li className={style.svg}>
        <span>Exit</span> <IoMdExit />
      </li>
    </nav>
  );
}

export default NavBar;
