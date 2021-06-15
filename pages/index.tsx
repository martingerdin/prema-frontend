import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { ThemeContext } from "../components/ThemeContext";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <Head>
        <title>prema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <section
          className={`hero is-fullheight ${darkTheme ? "is-dark" : "is-light"}`}
        >
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <figure className="image">
                <Image
                  src="/twemoji-13.1.0-syringe-1f489.svg"
                  height={150}
                  width={150}
                />
              </figure>
              <Logo />
              <h2 className="subtitle">
                <strong>Välkommen!</strong> Det finns inget här än, men vänta
                bara, det kommer bli grymt!
              </h2>
            </div>
          </div>
        </section>
      </ThemeContext.Provider>
    </div>
  );
}
