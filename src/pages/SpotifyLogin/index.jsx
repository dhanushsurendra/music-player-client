import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ee3c4960ad714946a8c9ee328f6b593d&redirect_uri=http://localhost:3000/login&response_type=code"

export default function SpotifyLogin() {
  return (
    <div className={styles.container}>
        <Button variant="contained" 
        style={{
        borderRadius: "4rem",
        backgroundColor: "#1ed760",
        padding: "18px 36px",
        color: "#000",
        fontSize: "14px"
    }}>
            <a href={AUTH_URL}>Login With Spofity</a>
        </Button>
    </div>
  )
}
