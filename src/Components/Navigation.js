import React, { useState, useEffect } from "react";
import youtubeLogo from "../styles/images/youtubeLogo.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const Navigation = ({
	defaultSearchTerm,
	searchVideo,
	allSearchedVideos,
	setAllSearchedVideos,
}) => {
	const [currentIndex, setCurrentIndex] = useState(
		allSearchedVideos.length - 1
	);

	const addToPreviousVideos = () => {
		setAllSearchedVideos([...allSearchedVideos, defaultSearchTerm]);
	};

	const handleClickHomeLogo = () => {
		searchVideo(defaultSearchTerm);
		addToPreviousVideos();
	};

	const handleClickBack = () => {
		if (currentIndex === 0) return;
		setCurrentIndex((prevIndex) => prevIndex - 1);
	};

	const handleClickForward = () => {
		if (currentIndex === allSearchedVideos.length - 1) return;
		setCurrentIndex((prevIndex) => prevIndex + 1);
	};

	const playAlreadySearchedVideo = () => {
		searchVideo(allSearchedVideos[currentIndex]);
	};

	useEffect(() => {
		playAlreadySearchedVideo();
	}, [currentIndex]);

	useEffect(() => {
		setCurrentIndex(allSearchedVideos.length - 1);
	}, [setCurrentIndex, allSearchedVideos]);

	return (
		<div className="navigation-icons-container">
			<div
				className="home-logo-container pointer"
				onClick={() => {
					handleClickHomeLogo();
				}}
			>
				<img className="logo" src={youtubeLogo} alt="YouTube"></img>
				<h2>YouTube</h2>
			</div>
			<div className="navigation-arrows-container">
				<IoMdArrowRoundBack
					className="navigation-arrow-back pointer"
					onClick={() => handleClickBack()}
				/>

				<IoMdArrowRoundForward
					className="navigation-arrow-forward pointer"
					onClick={() => handleClickForward()}
				/>
			</div>
		</div>
	);
};

export default Navigation;
