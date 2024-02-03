import './styles/Header.sass'



function Header() {


  return (
      <header className='header'>
        <div className="header__container">
          <nav className='header__nav'>
            <div className="header__left">
              <a href="/"><img src='./Logo.png' alt="logo"/></a>
            </div>
            <div className='header__right'>
              <ul className='header__list'>
                <li className='header__item'><a href="#">How it works</a></li>
                <li className='header__item'><a href="#">Benefits</a></li>
                <li className='header__item'><a href="#">Pricing</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header
