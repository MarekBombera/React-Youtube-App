import React, { useState, useEffect, useRef } from "react";
import CommentOptions from "./Modals/CommentOptions";
import randomID from "../config/RandomID";
import faker from "faker";
import Avatar from "avataaars";
import { generateRandomAvatar } from "../config/Avatars";
import { FaEllipsisV } from "react-icons/fa";

const Comments = () => {
	const [commentBody, setCommentBody] = useState("");
	const [commentsList, setCommentsList] = useState([]);
	const [openCommentOptions, setOpenCommentOptions] = useState(false);
	const [selectedCommentProps, setSelectedCommentProps] = useState(null);

	const submitCommentButtonRef = useRef();

	const randomName = faker.name.findName();
	const randomAvatar = generateRandomAvatar();

	const handleSubmitComment = () => {
		if (handleEmptyComment()) return;

		setCommentsList([
			...commentsList,
			{
				commentName: randomName,
				commentBody: commentBody,
				commentAvatar: { ...randomAvatar },
				commentID: randomID(),
				commentEdited: false,
			},
		]);
		setCommentBody("");
	};

	const getSelectedCommentProps = (comment) => {
		setSelectedCommentProps({
			commentID: comment.commentID,
			commentBody: comment.commentBody,
			commentEdited: comment.commentEdited,
		});
	};

	const handleOpenOptions = () => {
		setOpenCommentOptions(true);
	};

	const showOptionsIcon = (e) => {
		e.currentTarget.childNodes[1].style.display = "block";
	};

	const hideOptionsIcon = (e) => {
		e.currentTarget.childNodes[1].style.display = "none";
	};

	const handleEmptyComment = () => {
		if (!commentBody) {
			return true;
		}
	};

	useEffect(() => {
		commentBody
			? submitCommentButtonRef.current.classList.add("active-button-style")
			: submitCommentButtonRef.current.classList.remove("active-button-style");
	}, [commentBody, submitCommentButtonRef]);

	const createComment = commentsList.map((comment) => {
		return (
			<div
				className="comments-content-container"
				key={comment.commentID}
				onMouseOver={showOptionsIcon}
				onMouseLeave={hideOptionsIcon}
			>
				<div className="comments-content-wrapper">
					<div>
						<Avatar
							className="avatar-img"
							avatarStyle="Circle"
							{...comment.commentAvatar}
						/>
					</div>
					<div className="comments-body-container">
						<div>
							<h4 className="comments-userName">
								{!comment.commentEdited
									? comment.commentName
									: `${comment.commentName} (Edited)`}
							</h4>
						</div>
						<div>
							<p className="comments-text">{comment.commentBody}</p>
						</div>
					</div>
				</div>
				<div
					className="comments-options"
					onClick={() => {
						getSelectedCommentProps(comment);
						handleOpenOptions();
					}}
				>
					<FaEllipsisV className="comments-options-icon pointer" />
				</div>
			</div>
		);
	});

	return (
		<div className="comments-container">
			<div>
				<h2>Comments</h2>
			</div>
			<div className="comments-textarea-container">
				<textarea
					className="comments-textarea"
					placeholder="Write a comment..."
					value={commentBody}
					onChange={(e) => {
						setCommentBody(e.target.value);
					}}
				></textarea>
				<button
					className=" default-button-style"
					onClick={() => handleSubmitComment()}
					ref={submitCommentButtonRef}
				>
					COMMENT
				</button>
			</div>
			{createComment}
			{!openCommentOptions ? null : (
				<CommentOptions
					selectedCommentProps={selectedCommentProps}
					commentsList={commentsList}
					setCommentsList={setCommentsList}
					openCommentOptions={openCommentOptions}
					closeCommentOptions={() => setOpenCommentOptions(false)}
				/>
			)}
		</div>
	);
};

export default Comments;
