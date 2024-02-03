import Button from './components/Button'
import './styles/Hero.sass'

function Hero() {


  return (
      <section className='hero'>
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left">
              <h1 className='hero__title'>Get a custom-made <br /> video solution for your <br /> study problem</h1>
              <div className="hero__left__info">
                <p>An expert tutor will record a step by step <br /> explanation for your request</p>
              </div>
              <Button />
            </div>
            <div className="hero__right">
              <img src="./hero.png" alt="Phone" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero