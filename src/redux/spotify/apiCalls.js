const apiUrl = "https://accounts.spotify.com/authorize";
const redirectUrl = ""

export const getHomePageContent = async (payload, dispatch) => {
	dispatch(actions.getUserStart());
	try {
		const { data } = await axiosInstance.get(apiUrl + `/users/${payload}`);
		dispatch(actions.getUserSuccess(data.data));
		return true;
	} catch (error) {
		dispatch(actions.getUserFailure());
		return false;
	}
};