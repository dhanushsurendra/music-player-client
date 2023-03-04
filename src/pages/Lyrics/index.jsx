import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../redux/axiosInstance'
import styles from './styles.module.scss'

const Lyrics = () => {
	const query = new URLSearchParams(useLocation().search)
	const artist = query.get('artist')
	const name = query.get('name')

	const [lyrics, setLyrics] = useState('')
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		setIsFetching(true)

		const url = process.env.REACT_APP_API_URL + '/lyrics'
		axios
			.get(url, {
				params: { artist: artist, track: name }
			})
			.then((res) => {
				setLyrics(res.data.lyrics)
				setIsFetching(false)
			})
			.catch((err) => {
				setIsFetching(false)
			})
	}, [])

	return (
		<div className={styles.container}>
			<div
				style={{
					textAlign: 'center',
					whiteSpace: 'pre',
					width: '100%'
				}}
			>
				{isFetching && (
					<CircularProgress
						style={{ color: '#1ed760' }}
						size="5rem"
					/>
				)}
				<h1>{lyrics}</h1>
			</div>
		</div>
	)
}

export default Lyrics
