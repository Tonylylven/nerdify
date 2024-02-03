import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Tutors from './Tutors.tsx'
import Submit from './Submit.tsx'
import Action from './Action.tsx'
import Plan from './Plan.tsx'
import Faq from './Faq.tsx'
import Footer from './Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='hero-container'>
    <Header />
    <Hero />
    </div>
    <Tutors />
    <Submit />
    <Action />
    <Plan />
    <Faq />
    <Footer />
  </React.StrictMode>,
)