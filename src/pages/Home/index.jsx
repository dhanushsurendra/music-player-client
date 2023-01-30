import { Fragment, useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import axiosInstance from '../../redux/axiosInstance'
import Playlist from '../../components/Playlist'
import styles from './styles.module.scss'
import Section from '../../components/Section'
import RecentlyPlayed from '../../components/RecentlyPlayed'

const Home = () => {
	const [firstPlaylists, setFirstPlaylists] = useState([])
	const [secondPlaylists, setSecondPlaylists] = useState([])
	const [isFetching, setIsFetching] = useState(false)

	const getRandomPlaylists = async () => {
		try {
			setIsFetching(true)
			const url = process.env.REACT_APP_API_URL + '/playlists/random'
			const { data } = await axiosInstance.get(url)
			const array1 = data.data.splice(0, 4)
			const array2 = data.data
			setFirstPlaylists(array1)
			setSecondPlaylists(array2)
			setIsFetching(false)
		} catch (error) {
			setIsFetching(false)
		}
	}

	useEffect(() => {
		getRandomPlaylists()
	}, [])

	return (
		<Fragment>
			{isFetching ? (
				<div className={styles.progress_container}>
					<CircularProgress
						style={{ color: '#1ed760' }}
						size="5rem"
					/>
				</div>
			) : (
				<div className={styles.container}>
					<div>
						<Section title="Global Top 50" navigateTo={'/'} />
						<Section
							title="Songs you might like"
							navigateTo={'/'}
						/>
						<RecentlyPlayed
							title="Songs you might like"
							navigateTo={'/'}
						/>
						<Section
							title="Songs you might like"
							navigateTo={'/'}
						/>
						<Section className={styles.playlists_container}>
							<Playlist playlists={firstPlaylists} />
						</Section>
						<h1>Just the hits</h1>
						<div className={styles.playlists_container}>
							<Playlist playlists={secondPlaylists} />
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default Home
