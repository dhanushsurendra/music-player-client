import { BsFillPlayFill } from "react-icons/bs"
import styles from './styles.module.scss'

const PlayButton = () => {
	return (
		<div className={styles.playButton}>
			<BsFillPlayFill fill="#1ed760" />
		</div>
	)
}

export default PlayButton
