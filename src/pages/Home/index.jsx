import { Fragment, useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import axiosInstance from '../../redux/axiosInstance'
import Playlist from '../../components/Playlist'
import styles from './styles.module.scss'
import Section from '../../components/Section'
import RecentlyPlayed from '../../components/RecentlyPlayed'
import { useSelector } from 'react-redux'

const Home = () => {
	const [firstPlaylists, setFirstPlaylists] = useState([])
	// const []
	const [secondPlaylists, setSecondPlaylists] = useState([])
	const [greet, setGreet] = useState('')
	const [isFetching, setIsFetching] = useState(false)
	const state = useSelector((state) => state.spotify)

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

		// greet message to be displayed
		const myDate = new Date()
		const hrs = myDate.getHours()

		if (hrs < 12) greet = 'Good Morning'
		else if (hrs >= 12 && hrs <= 17) setGreet('Good Afternoon')
		else if (hrs >= 17 && hrs <= 24) setGreet('Good Evening')
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
					<h1 style={{ color: '#17202c', marginLeft: '2rem' }}>{greet}</h1>
					<Section title="Global Top 10" playlists={firstPlaylists} />
					<Section
						title="Songs You Might Like"
						playlists={firstPlaylists}
					/>
					{firstPlaylists.length !== 0 && <Section title="My PlayLists" playlists={firstPlaylists} /> }
					<RecentlyPlayed />
					{secondPlaylists.length !== 0 && (
						<h1 style={{ color: '#17202c' }}>Just the hits</h1>
					)}
					{secondPlaylists.length !== 0 && (
						<Section playlists={secondPlaylists} />
					)}
				</div>
			)}
		</Fragment>
	)
}

export default Home
