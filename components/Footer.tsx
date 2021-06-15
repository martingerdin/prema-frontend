import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Footer() {
  const { darkTheme } = useContext(ThemeContext);

  console.log(darkTheme);

  return (
    <footer className={`footer has-background-${darkTheme ? "dark" : "light"}`}>
      <div className="content has-text-centered">
        <p>
          Byggd med <a href="https://nextjs.org/">Next.js</a> och{" "}
          <a href="https://bulma.io/">Bulma</a> | Sprutemoji från{" "}
          <a href="https://twemoji.twitter.com/">Twemoji</a>
        </p>
      </div>
    </footer>
  );
}
