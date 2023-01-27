
import Artist from '../Artist';
import styles from './styles.module.scss'
import logo from '../../images/rock.jpg'

const RightSide = () => {
    return (
        <div className={styles.container}>
            <h2 class="heading__primary" style={{marginBottom: "16px"}}>Top Artists</h2>
            <div className={styles.artistContainer}>
                <Artist image={logo} title="Blink 182" />
                <Artist image={logo} title="Blink 182" />
                <Artist image={logo} title="Blink 182" />
            </div>
        </div>
    )
}

export default RightSide;