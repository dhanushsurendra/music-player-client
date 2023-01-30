import logo from "../../../images/rock.jpg"
import PlayButton from "../../PlayButton";
import styles from './styles.module.scss'

const RecentlyPlayedItem = ({ no, image, title, artist, duration }) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 style={{color: '#7c8db5', marginRight: '1rem'}}>01</h2>
                <div className={styles.imageInfo}>
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        <p className="heading__primary" style={{marginBottom: 0, fontSize: '1.6rem'}}>I miss you</p>
                        <p style={{color: '#7c8db5', marginTop: 0}}>Blink 182</p>
                    </div>
                </div>
            </div>
            <div className={styles.controls}>
                <p style={{color: '#7c8db5'}}>3:45</p>
                <PlayButton isAbsolute={false} />
            </div>
        </div>
    )
}

export default RecentlyPlayedItem;