import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import CommentEditModal from "./CommentEditModal";
import CommentDeleteModal from "./CommentDeleteModal";
import useClickOutside from "../../hooks/useClickOutside";

const CommentOptions = ({
	closeCommentOptions,
	selectedCommentProps,
	commentsList,
	setCommentsList,
}) => {
	const [openEditModal, setOpenEditModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const domNodeRef = useClickOutside(() => {
		closeCommentOptions();
	});

	return ReactDom.createPortal(
		<>
			<div className="modal-overlay"></div>
			<div className="comment-options-modal" ref={domNodeRef}>
				{!openEditModal ? null : (
					<CommentEditModal
						selectedCommentProps={selectedCommentProps}
						commentsList={commentsList}
						closeCommentOptions={closeCommentOptions}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal}
					/>
				)}
				{!openDeleteModal ? null : (
					<CommentDeleteModal
						selectedCommentProps={selectedCommentProps}
						commentsList={commentsList}
						setCommentsList={setCommentsList}
						closeCommentOptions={closeCommentOptions}
						openDeleteModal={openDeleteModal}
						setOpenDeleteModal={setOpenDeleteModal}
					/>
				)}
				<div className="comment-options-buttons-container">
					<button
						className="default-button-style pointer"
						onClick={() => setOpenEditModal(true)}
					>
						EDIT
					</button>
					<button
						className="default-button-style pointer"
						onClick={() => setOpenDeleteModal(true)}
					>
						DELETE
					</button>
				</div>
			</div>
		</>,
		document.getElementById("portal")
	);
};
export default CommentOptions;
