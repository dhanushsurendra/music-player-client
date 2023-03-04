import { Fragment, useState } from 'react'
import Song from '../../components/Song'
import Playlist from '../../components/Playlist'
import { IconButton, CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './styles.module.scss'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import EmotionRecognition from '../EmotionDetection'
import SpotifyWebApi from 'spotify-web-api-node'
import axiosInstance from '../../redux/axiosInstance'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// const spotifyApi = new SpotifyWebApi({
// 	clientId: process.env.REACT_APP_CLIENT_ID
// })

const Search = ({ accessToken }) => {
	const [search, setSearch] = useState('')
	const [lyrics, setLyrics] = useState('')
	const [results, setResults] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	// const state = useSelector((state) => state.spotify)

	// console.log(accessToken)

	// useEffect(() => {
	// 	if (!state.accessToken) return
	// 	spotifyApi.setAccessToken(state.accessToken)
	// }, [state.accessToken])

	const handleSearch = async ({ currentTarget: input }) => {
		setSearch(input.value)
		setResults({})

		try {
			const url =
				process.env.REACT_APP_API_URL + `/?search=${input.value}`
			const { data } = await axiosInstance.get(url)
			setResults(data)

			// if (data.songs.length === 0 && data.playlists.length === 0) {
			// 	spotifyApi.searchTracks(search).then((res) => {
			// 		console.log(res)
			// 	})
			// }

			setIsFetching(false)
		} catch (error) {
			console.log(error)
			setIsFetching(false)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.search_input_container}>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input
					type="text"
					placeholder="Search for songs and playlists"
					onChange={handleSearch}
					value={search}
				/>
				<IconButton onClick={() => setSearch('')}>
					<ClearIcon />
				</IconButton>

				<Link to="/emotionbasedsearch">
					<IconButton>
						<TagFacesIcon />
					</IconButton>
				</Link>
			</div>
			{isFetching && (
				<div className={styles.progress_container}>
					<CircularProgress
						style={{ color: '#1ed760' }}
						size="5rem"
					/>
				</div>
			)}
			{Object.keys(results).length !== 0 && (
				<div className={styles.results_container}>
					{results.songs.length !== 0 && (
						<div className={styles.songs_container}>
							{results.songs.map((song) => (
								<Fragment key={song._id}>
									<Song song={song} setLyrics={setLyrics} />
								</Fragment>
							))}
						</div>
					)}
					{results.playlists.length !== 0 && (
						<div className={styles.playlists_container}>
							<Playlist playlists={results.playlists} />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
