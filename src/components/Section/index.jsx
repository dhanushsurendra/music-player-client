import { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Playlist from '../Playlist'
import SectionItem from './SectionItem'
import styles from './styles.module.scss'

const Section = ({ title, navigateTo = "/", playlists }) => {
	return (
		<div className={styles.section}>
			<div style={{display: "flex", justifyContent: "space-between", marginBottom: "1rem"}}>
				<h2 className="heading__primary" style={{marginLeft: "1rem"}}>{title}</h2>
				<NavLink to={"/"} className="heading__text" style={{fontWeight: "600"}}>See all</NavLink>
				{/* <NavLink
					to={navigateTo}
					className={styles.menu_link}
					activeClassName={styles.active_menu}
				>
					<span>See All</span>
				</NavLink> */}
			</div>

			<div className={styles.sectionContainer}>
				<Playlist playlists={playlists} />
			</div>
		</div>
	)
}

export default Section
