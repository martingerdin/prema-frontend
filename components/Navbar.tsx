import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const [mouseOver, setMouseOver] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <a
      className={`button ${mouseOver && "is-primary"} ${
        darkTheme ? "is-light" : "is-dark"
      }`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <span className="icon">
        <Icon path={mdiThemeLightDark} />
      </span>
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <ThemeButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
