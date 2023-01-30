import cover from '../../images/rock.jpg'
import PlayButton from '../../components/PlayButton'
import styles from './styles.module.scss'
import RecentlyPlayedItem from './RecentlyPlayedItem'
import { NavLink } from 'react-router-dom'

const RecentlyPlayed = () => {
	return (
		<div className={styles.sectionItemContainer}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '1rem',
                    padding: '1rem 2rem 0.5rem 2rem'
				}}
			>
				<h2 className="heading__primary">Recently Played</h2>
				<NavLink
					to={'/'}
					className="heading__text"
					style={{ fontWeight: '600' }}
				>
					See all
				</NavLink>
			</div>

			<RecentlyPlayedItem />
			<RecentlyPlayedItem />
			<RecentlyPlayedItem />
		</div>
	)
}

export default RecentlyPlayed
