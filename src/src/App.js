import React, { useState, useEffect } from "react";
import useVideos from "./hooks/useVideos";
import Navigation from "./Components/Navigation";
import SearchBar from "./Components/SearchBar";
import VideoPlayer from "./Components/VideoPlayer";
import SideBarList from "./Components/SideBarList";
import Comments from "./Components/Comments";
import Spinner from "./Components/Spinner";
import "./styles/css/style.css";

const App = () => {
	const defaultSearchTerm = "happy music";
	const [mainVideo, setMainVideo] = useState(null);
	const [sideBarVideos, setSideBarVideos] = useState([]);
	const [allSearchedVideos, setAllSearchedVideos] = useState([]);
	const [videos, searchVideo] = useVideos(defaultSearchTerm);

	const onSideBarVideoSelect = (video) => {
		setMainVideo(video);
	};

	useEffect(() => {
		setAllSearchedVideos([defaultSearchTerm]);
	}, [setAllSearchedVideos]);

	useEffect(() => {
		setMainVideo(videos[0]);
		setSideBarVideos(videos);
	}, [videos]);

	if (!mainVideo) {
		return <Spinner />;
	}

	return (
		<div className="app-container">
			<div className="header-container">
				<Navigation
					searchVideo={searchVideo}
					allSearchedVideos={allSearchedVideos}
					setAllSearchedVideos={setAllSearchedVideos}
					defaultSearchTerm={defaultSearchTerm}
				/>
				<SearchBar
					searchVideo={searchVideo}
					allSearchedVideos={allSearchedVideos}
					setAllSearchedVideos={setAllSearchedVideos}
				/>
			</div>
			<div className="body-container">
				<div className="video-content-container">
					<VideoPlayer mainVideo={mainVideo} />
					<Comments />
				</div>
				<div className="sidebar-list-container">
					<SideBarList
						sideBarVideos={sideBarVideos}
						onSideBarVideoSelect={onSideBarVideoSelect}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
