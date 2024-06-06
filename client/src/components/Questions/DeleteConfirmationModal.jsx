import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-gray-600 rounded-lg p-6 w-96">
				<h2 className="text-3xl font-bold mb-4">Delete Confirmation!</h2>
				<p className="mb-6">Are you sure you want to delete this question?</p>
				<div className="flex justify-end space-x-4">
					<button className="btn btn-primary w-20" onClick={onClose}>
						NO
					</button>
					<button className="btn btn-accent w-20" onClick={onDelete}>
						YES
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmationModal;
