import React from "react";
import RandomID from "../config/RandomID";

const SideBarList = ({ sideBarVideos, onSideBarVideoSelect }) => {
	const createVideoSideBar = sideBarVideos.slice(1).map((video) => {
		return (
			<div
				className="side-video-container pointer"
				key={RandomID()}
				onClick={() => onSideBarVideoSelect(video)}
			>
				<div className="side-video-thumbnail-container">
					<img
						className="side-video-thumbnail-img"
						src={video.snippet.thumbnails.high.url}
						alt={video.snippet.channelTitle}
					/>
				</div>
				<div className="side-video-description">
					<h5>{video.snippet.title}</h5>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
	});

	return <>{createVideoSideBar}</>;
};

export default SideBarList;
