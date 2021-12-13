import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		searchVideo(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const searchVideo = async (searchTerm) => {
		const response = await youtube.get("search/", {
			params: {
				q: searchTerm,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, searchVideo];
};

export default useVideos;
