import Better from './Better'
import './styles/Tutors.sass'

function Tutors () {
    return(
        <section className='tutors'>
            <div className="container">
                <div className='tutors__span'>
                    <span>Our tutors can help with 35+ subjects!</span>
                </div>
                <ul className="tutors__categories">
                    <li className="tutors__item"><button className="tutors__button">Mathematics</button></li>
                    <li className="tutors__item"><button className="tutors__button">Physics</button></li>
                    <li className="tutors__item"><button className="tutors__button">Chemistry</button></li>
                    <li className="tutors__item"><button className="tutors__button">Biology</button></li>
                    <li className="tutors__item"><button className="tutors__button">Accounting</button></li>
                    <li className="tutors__item"><button className="tutors__button">Finance</button></li>
                    <li className="tutors__item"><button className="tutors__button">Economics</button></li>
                    <li className="tutors__item"><button className="tutors__button">Geography</button></li>
                    <li className="tutors__item"><button className="tutors__button">History</button></li>
                </ul>
                <div className="steps">
                    <h2 className="steps__title">As simple as TikTok &nbsp;&nbsp; and cheaper than &nbsp;&nbsp; a tutoring session</h2>
                    <div className="steps__wrapper">
                        <div className="steps__left">
                            <div className="steps__item">
                                <div className="steps__item__title">1</div>
                                <p className="steps__info">Send your problem: take a <br /> photo, copy & paste <br /> instructions or attach files.</p>
                            </div>

                            <div className="steps__item">
                                <div className="steps__item__title">3</div>
                                <p className="steps__info">Chat with your tutor for the <br /> next 24 hours to clarify any <br /> questions.</p>
                            </div>
                        </div>
                        <div className="steps__middle">
                            <img src="./phone.png" alt="phone" />
                        </div>
                        <div className="steps__right">
                            <div className="steps__item">
                                <div className="steps__item__title">2</div>
                                <p className="steps__info">Get a video with a <br /> solution explained in <br /> details within an hour!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Better />
            </div>
        </section>
    )
}

export default Tutors