import React from "react";
import { NavLink } from "react-router-dom";

export default function Menubar() {
  return (
    <div className="menubar">
      <NavLink className='menu_link'  to="/">all</NavLink>
      <NavLink className='menu_link' to="image">image</NavLink>
      <NavLink className='menu_link' to="video">video</NavLink>
      <NavLink className='menu_link' to="new">new</NavLink>
    </div>
  );
}
