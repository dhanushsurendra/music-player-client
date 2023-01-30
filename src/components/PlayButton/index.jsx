import { BsFillPlayFill } from "react-icons/bs"
import styles from './styles.module.scss'

const PlayButton = ({ isAbsolute }) => {
	console.log(isAbsolute)
	return (
		<div className={styles.playButton} style={{ position: isAbsolute && 'absolute'}}>
			<BsFillPlayFill fill="#1ed760" />
		</div>
	)
}

export default PlayButton
