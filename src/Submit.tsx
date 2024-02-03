import './styles/Submit.sass'


function Submit () {
    return(
        <section className='submit'>
            <div className="container">
                <h2 className='submit__title'>Submit as many problems as you need.</h2>
                <h2 className='submit__subtitle'>Your tutor will record &nbsp;&nbsp;&nbsp; a separate explanation &nbsp;&nbsp;&nbsp; for each!</h2>
                <div className="submit__wrapper">
                    <ul className="submit__list">
                        <li className="submit__list__item">Up to 10-minute long video</li>
                        <li className="submit__list__item">Step by step problem solving</li>
                    </ul>
                    <ul className="submit__list">
                        <li className="submit__list__item">Done on digital whiteboard</li>
                        <li className="submit__list__item">Voice comments from a tutor</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default Submit