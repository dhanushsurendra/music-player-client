import React from 'react'

const AUTH_URL = process.env.REACT_APP_AUTH_END_POINT + "/authorize/client_id=" + process.env.REACT_APP_CLIENT_ID + "/&response_type=code&redirect_uri=" + process.env.REACT_APP_REDIRECT_URI + "scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state" 

export default function     () {
  return (
    <a href={AUTH_URL}>Login With Spofity</a>
  )
}
