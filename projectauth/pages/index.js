import Head from 'next/head'
import React, { useEffect ,useContext} from 'react'
import UserContext from './context/UserContext';
import { useRouter } from 'next/router'

import Image from 'next/image'
import styles from '../styles/Home.module.css'





export default function Home(props) {

  const router = useRouter()

  const context = useContext(UserContext);
  const { user, getuser } = context;
  // console.log(user.name);


  useEffect(() => {

    if (localStorage.getItem('token')) {
      getuser();
    }
    else {
      router.push("/Signin")
    }
    // eslint-disable-next-line 
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>MERN </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold  flex justify-center items-center h-screen  ">
          Welcome to the Mern Project  <span className='text-4xl text-purple-500 mx-5'> { user.name}</span>
        </h1>
      </main>


    </div>
  )
}
