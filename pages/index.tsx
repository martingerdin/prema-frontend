import Head from "next/head";
import Image from "next/image";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>prema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Logo />
            <h2 className="subtitle">
              <strong>Välkommen!</strong> Det finns inget här än, men vänta
              bara, det kommer bli grymt!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
