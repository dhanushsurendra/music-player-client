import { NavLink } from 'react-router-dom'
import SectionItem from './SectionItem'
import styles from './styles.module.scss'

const Section = ({ title, navigateTo, children }) => {
	return (
		<div className={styles.section}>
			<div style={{display: "flex", justifyContent: "space-between", marginBottom: "1rem"}}>
				<h2 class="heading__primary">{title}</h2>
				<NavLink to={"/"} class="heading__text" style={{fontWeight: "600"}}>See all</NavLink>
				{/* <NavLink
					to={navigateTo}
					className={styles.menu_link}
					activeClassName={styles.active_menu}
				>
					<span>See All</span>
				</NavLink> */}
			</div>

			<div className={styles.sectionContainer}>
				<SectionItem />
				<SectionItem />
				<SectionItem />
				<SectionItem />
			</div>
		</div>
	)
}

export default Section
