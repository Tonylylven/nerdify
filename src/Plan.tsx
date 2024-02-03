import './styles/Plan.sass'

function Plan () {
    return(
        <section className="plan">
            <div className="container">
                <h2 className="plan__title">Choose your plan</h2>
                <div className="plan__wrapper">
                    <div className="plan__item">
                        <h3 className="plan__item__title">Basic - $49/mo</h3>
                        <ul className="plan__list">
                            <li className="plan__list__item">15 problems/mo included</li>
                            <li className="plan__list__item">Then: $5/problem</li>
                            <li className="plan__list__item">Private chat with tutor</li>
                            <li className="plan__list__item">Unlimited access 24/7</li>
                        </ul>
                        <button className="plan__button">Subscribe Now</button>
                    </div>

                    <div className="plan__item">
                        <h3 className="plan__item__title">Pro - $99/mo</h3>
                        <ul className="plan__list">
                            <li className="plan__list__item">35 problems/mo included</li>
                            <li className="plan__list__item">Then: $4/problem</li>
                            <li className="plan__list__item">Private chat with tutor</li>
                            <li className="plan__list__item">Unlimited access 24/7</li>
                        </ul>
                        <button className="plan__button">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plan