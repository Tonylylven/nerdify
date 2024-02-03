import styles from './styles/Better.module.sass'


function Better () {
    return(
        <div className={styles.better}>
            <h2 className={styles.title}>Better than anything you’ve tried before</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img className={styles.img} src="./zeeper.png" alt="" />
                    <h3 className={styles.subtitle}>Faster</h3>
                    <p className={styles.info}>No need to schedule and wait for live sessions with <br /> tutors.</p>
                </div>

                <div className={styles.col}>
                    <img className={styles.img} src="./wallet.png" alt="" />
                    <h3 className={styles.subtitle}>Cheaper</h3>
                    <p className={styles.info}>No need to pay for the whole hour to understand a small <br /> problem.</p>
                </div>

                <div className={styles.col}>
                    <img className={styles.img} src="./message.png" alt="" />
                    <h3 className={styles.subtitle}>At hand</h3>
                    <p className={styles.info}>Get back to the video any time and chat with a tutor <br /> on the go.</p>
                </div>
            </div>
        </div>
    )
}

export default Better