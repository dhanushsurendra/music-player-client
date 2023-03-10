import { NavLink } from 'react-router-dom'
import Playlist from '../Playlist'
import styles from './styles.module.scss'

const Section = ({ title, navigateTo = "/", playlists, notPlaylist, all = true }) => {
	return (
		<div className={styles.section}>
			<div style={{display: "flex", justifyContent: "space-between", marginBottom: "1rem"}}>
				<h2 className="heading__primary" style={{marginLeft: "1rem"}}>{title}</h2>
				{ all && <NavLink to={navigateTo} className="heading__text" style={{fontWeight: "600"}}>SHOW ALL</NavLink> }
			</div>

			<div className={styles.sectionContainer}>
				<Playlist playlists={playlists} notPlaylist={notPlaylist} />
			</div>
		</div>
	)
}

export default Section
