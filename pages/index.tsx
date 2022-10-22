import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Fer's Portfolios</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
