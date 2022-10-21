import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fer's Portfolios</title>
      </Head>
      <h1 className='text-3xl font-bold underline text-emerald-500 '>
        Hello world!
      </h1>
    </div>
  )
}

export default Home
