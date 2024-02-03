import './styles/Footer.sass'

function Footer () {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <img src="./footer_logo.png" alt="logo" />
                </div>
                <div className="footer__right">
                    <ul className="footer__list">
                        <li className="footer__list__item">Privacy Policy</li>
                        <li className="footer__list__item">Terms&Conditions</li>
                        <li className="footer__list__item">Refund Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer