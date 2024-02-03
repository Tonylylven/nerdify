import './styles/Action.sass'

function Action () {
    return(
        <section className="action">
            <div className="container">
                <h2 className="action__title"><span>178 tutors</span> &nbsp;&nbsp; are online now and ready to help you ASAP!</h2>
                <div className="action__subtitle"><span>Tap to see our tutors in action!</span></div>
                <div className="action__wrapper">
                    <div className="action__item">
                        <div className="action__item__container">
                            <h3 className="action__item__title">Statistics</h3>
                            <img src="./action-1.png" alt="video" />
                            <a href="#" className="action__link">
                                <img src="./play.png" alt="play" className="action__play" />
                            </a>
                        </div>

                        <div className="action__item__container">
                            <h3 className="action__item__title">Chemistry</h3>
                            <img src="./action-2.png" alt="video" />
                            <a href="#" className="action__link">
                                <img src="./play.png" alt="play" className="action__play" />
                            </a>
                        </div>

                        <div className="action__item__container">
                            <h3 className="action__item__title">Economics</h3>
                            <img src="./action-3.png" alt="video" />
                            <a href="#" className="action__link">
                                <img src="./play.png" alt="play" className="action__play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Action