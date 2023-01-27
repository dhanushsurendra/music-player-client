import cover from '../../images/rock.jpg';
import PlayButton from "../../components/PlayButton";
import styles from './styles.module.scss'

const RecentlyPlayed = () => {
    return (
        <div className={styles.sectionItemContainer}>
            <div>
                <div className={styles.imageContainer}>
                    <img src={cover} className={styles.image} />
                </div>

                <PlayButton />

                <h5 class="heading__secondary">told you so</h5>
                <p class="heading__text">Angles & Airways</p>
            </div>
        </div>
    )
} 

export default RecentlyPlayed