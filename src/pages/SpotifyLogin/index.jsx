import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ee3c4960ad714946a8c9ee328f6b593d&redirect_uri=http://localhost:3000/login&response_type=code"

console.log(AUTH_URL)
export default function SpotifyLogin() {
  return (
    <div className={styles.container}>
        <Button style={{ fontSize: '2rem' }}>
            <a href={AUTH_URL}>Login With Spofity</a>
        </Button>
    </div>
  )
}
