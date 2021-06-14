import Head from 'next/head'
import Image from 'next/image'

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
		    <h1 className="title is-spaced" style={{fontSize: "4rem"}}>prema</h1>
		    <h2 className="subtitle">
			<strong>Välkommen!</strong> Det finns inget här än, men vänta bara, det kommer bli grymt!</h2>
	    </div>
	</div>
    </div>
    </div>
  )
}
