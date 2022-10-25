import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

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
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section className='snap-center' id='experience'>
        <Experience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className=' snap-center'>
        <ContactMe />
      </section>
    </div>
  )
}

export default Home
