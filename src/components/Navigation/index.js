import { NavLink } from "react-router-dom";
import "./style.scss";

export function Navigation(props) {
  return (
    <nav className="Navigation">
      {props.routes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          className={({ isActive }) => "NavLink" + (isActive ? " active" : "")}
        >
          <div className="name">{route.name}</div>
          <div className="underline"></div>
        </NavLink>
      ))}
    </nav>
  );
}