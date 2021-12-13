import React, { useState } from "react";

const SearchBar = ({
	searchVideo,
	allSearchedVideos,
	setAllSearchedVideos,
}) => {
	const [term, setTerm] = useState("");

	const addToPreviousVideos = () => {
		setAllSearchedVideos([...allSearchedVideos, term]);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		searchVideo(term);
		addToPreviousVideos();
	};

	return (
		<div className="search-form-container">
			<form className="search-form" onSubmit={onSubmit}>
				<input
					className="search-input"
					type="text"
					placeholder="Search"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				></input>
				<button className="search-button pointer">
					<i className="search icon"></i>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
