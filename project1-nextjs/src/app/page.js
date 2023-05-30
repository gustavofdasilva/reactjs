import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/sections/Header'
import Main from '@/sections/Main'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
