import { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/userSlice/apiCalls";
import { getPlayLists } from "./redux/playListSlice/apiCalls";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import Profile from "./pages/Profile";
import RightSide from "./components/RightSide";
import SpotifyLogin from "./pages/SpotifyLogin";
import EmotionRecognition from "./pages/EmotionDetection";

const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { user } = useSelector((state) => state.auth);
	const { currentSong } = useSelector((state) => state.audioPlayer);
	const [accessToken, setAccessToken] = useState(''); 

	useEffect(() => {
		let token = null;
		const root = JSON.parse(window.localStorage.getItem("persist:root"));

		if (root) {
			const { auth } = root;
			const { user } = JSON.parse(auth);
			if (user) token = user.token;
		}

		if (user && token) {
			getUser(user._id, dispatch);
			getPlayLists(dispatch);
		}
	}, [dispatch, user]);

	return (
		<Fragment>
			{user &&
				location.pathname !== "/login" &&
				location.pathname !== "/" &&
				location.pathname !== "/signup" &&
				location.pathname !== "/not-found" && (
					<Fragment>
						<Navbar />
						<Sidebar />
						{currentSong && <AudioPlayer />}
						<RightSide />
					</Fragment>
				)}
			<Switch>
				<Route exact path="/" component={Main} />
				<PrivateRoute exact user={user} path="/home" component={Home} />
				<PrivateRoute
					exact
					user={user}
					path="/collection/tracks"
					component={LikedSongs}
				/>
				<PrivateRoute
					exact
					user={user}
					path="/collection/playlists"
					component={Library}
				/>
				<PrivateRoute exact user={user} path="/search" component={Search} />
				<PrivateRoute
					exact
					user={user}
					path="/playlist/:id"
					component={Playlist}
				/>
				<PrivateRoute exact user={user} path="/me" component={Profile} />
				{user && <Redirect from="/signup" to="/home" />}
				{user && <Redirect from="/login" to="/home" />}
				<Route path="/signup" component={SignUp} />
				<Route path="/login" render={() => <Login setAccessToken={setAccessToken} />} />
				{/* <Route path="/login" component={Login} /> */}
				<Route path="/spotifylogin" component={SpotifyLogin} />
				<Route path="/emotionbasedsearch" component={EmotionRecognition} />
				{/* <PrivateRoute exact user={user} path="/search" component={<Search accessToken={accessToken} />}  /> */}
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Fragment>
	);
};

export default App;
