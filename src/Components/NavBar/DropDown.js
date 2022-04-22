import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";

function DropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default DropDown;
