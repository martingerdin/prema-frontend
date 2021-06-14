import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
	<Head>
            <title>prema</title>
            <link rel="icon" href="/favicon.ico" />
	</Head>
	<div className="hero is-fullheight">
	    <div className="hero-body">
		<div className="container has-text-centered">
		    Hello
		</div>
	    </div>
	</div>
    </div>
  )
}
