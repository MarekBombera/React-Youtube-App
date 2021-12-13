import React from "react";

const CommentDeleteModal = ({
	selectedCommentProps,
	commentsList,
	setCommentsList,
	closeCommentOptions,
	setOpenDeleteModal,
}) => {
	const deleteComment = (selectedCommentID) => {
		const newCommentsList = commentsList.filter((comment) => {
			return comment.commentID !== selectedCommentID;
		});
		setCommentsList(newCommentsList);
		closeDeleteModal();
	};

	const closeDeleteModal = () => {
		closeCommentOptions();
		setOpenDeleteModal(false);
	};

	return (
		<>
			<div className="comment-delete-modal">
				<div className="comment-delete-content-container">
					<div>
						<h2>Delete comment</h2>
						<p>Delete your comment permanently?</p>
					</div>
					<hr className="comment-delete-modal-hr-container"></hr>
					<div className="comment-delete-modal-buttons-container">
						<button
							className="default-button-style pointer"
							onClick={() => closeDeleteModal()}
						>
							CANCEL
						</button>
						<button
							className="default-button-style pointer"
							onClick={() => deleteComment(selectedCommentProps.commentID)}
						>
							ACCEPT
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CommentDeleteModal;
