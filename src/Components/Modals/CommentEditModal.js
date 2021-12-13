import React, { useState, useEffect, useRef } from "react";

const CommentEditModal = ({
	selectedCommentProps,
	commentsList,
	closeCommentOptions,
	openEditModal,
	setOpenEditModal,
}) => {
	const [editText, setEditText] = useState(selectedCommentProps.commentBody);

	const acceptButtonRef = useRef();

	const originalText = selectedCommentProps.commentBody;

	const handleEditComment = (selectedCommentID) => {
		commentsList.filter((comment) => {
			if (comment.commentID === selectedCommentID) {
				if (comment.commentBody !== editText && editText) {
					closeEditModal();
					return [
						(comment.commentBody = editText),
						(comment.commentEdited = true),
					];
				}
			}

			return null;
		});
	};

	const closeEditModal = () => {
		closeCommentOptions();
		setOpenEditModal(false);
	};

	useEffect(() => {
		if (originalText !== editText) {
			editText
				? acceptButtonRef.current.classList.add("active-button-style")
				: acceptButtonRef.current.classList.remove("active-button-style");
		} else {
			acceptButtonRef.current.classList.remove("active-button-style");
		}
	}, [editText, openEditModal, originalText]);

	return (
		<>
			<div className="comment-edit-modal">
				<h2>Edit comment</h2>
				<textarea
					className="comment-edit-textarea"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
					autoFocus
				></textarea>
				<div className="comment-edit-modal-buttons-container">
					<button
						className="default-button-style pointer"
						onClick={() => closeEditModal()}
					>
						CANCEL
					</button>
					<button
						className="default-button-style "
						ref={acceptButtonRef}
						onClick={() => handleEditComment(selectedCommentProps.commentID)}
					>
						ACCEPT
					</button>
				</div>
			</div>
		</>
	);
};

export default CommentEditModal;
