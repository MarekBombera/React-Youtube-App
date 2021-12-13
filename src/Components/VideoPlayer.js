import React from "react";
import Rating from "./Rating";

const VideoPlayer = ({ mainVideo }) => {
	const { snippet, id } = mainVideo;

	return (
		<>
			<div className="video-player-container">
				<iframe
					src={`https://www.youtube.com/embed/${id.videoId}`}
					title="YouTube-Video"
				/>
			</div>

			<div className="video-metadata-container">
				<div className="video-description">
					<h2 className="video-creator">{snippet.channelTitle}</h2>
					<h3 className="video-title">{snippet.title}</h3>
					<p>{snippet.description}</p>
				</div>
				<Rating />
			</div>
			<span>
				<hr className="hr-description-comments"></hr>
			</span>
		</>
	);
};

export default VideoPlayer;
