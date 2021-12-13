import React, { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

const Rating = () => {
	const [likeActive, setLikeActive] = useState(false);
	const [dislikeActive, setDislikeActive] = useState(false);

	const ratingBarStyleToggle = () => {
		if (!likeActive && !dislikeActive) {
			return "rating-bar-default";
		}
		if (likeActive) {
			return "rating-bar-like";
		}
		return "rating-bar-dislike";
	};

	const handleLike = () => {
		if (likeActive) {
			setLikeActive(false);
			return;
		}
		setLikeActive(true);
		setDislikeActive(false);
	};

	const handleDislike = () => {
		if (dislikeActive) {
			setDislikeActive(false);
			return;
		}
		setLikeActive(false);
		setDislikeActive(true);
	};

	return (
		<>
			<div className="ratings-container">
				<div className="like-container pointer" onClick={() => handleLike()}>
					<div className="test1">
						{likeActive ? (
							<IoMdThumbsUp className="thumbs-icon-style" />
						) : (
							<FiThumbsUp className="thumbs-icon-style" />
						)}
					</div>
					<div className="test2">
						<h4>LIKE</h4>
					</div>
				</div>
				<div
					className="dislike-container pointer"
					onClick={() => handleDislike()}
				>
					<div className="test1">
						{dislikeActive ? (
							<IoMdThumbsDown className="thumbs-icon-style" />
						) : (
							<FiThumbsDown className="thumbs-icon-style" />
						)}
					</div>
					<div className="test2">
						<h4>DISLIKE</h4>
					</div>
				</div>
				<div className="rating-bar-container">
					<hr className={ratingBarStyleToggle()}></hr>
				</div>
			</div>
		</>
	);
};

export default Rating;
