import './styles/Faq.sass'

function Faq () {
    return(
        <section className="faq">
            <div className="container">
                <h2 className="faq__title">FAQ</h2>
                <div className="faq__wrapper">
                    <ul className="faq__list">
                        <li className="faq__list__item">How it works?</li>
                        <li className="faq__list__item">How do I cancel my subscription?</li>
                        <li className="faq__list__item">Can I submit more than 1 problem at once?</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq