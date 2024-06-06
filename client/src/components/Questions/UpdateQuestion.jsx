import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditQuestion from "../EditQuestion/EditQuestion";
import axios from "axios";
import { updateQuestion, deleteQuestion } from "../Redux/questionsSlice";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const UpdateQuestion = ({ ques, serialNumber }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// Update operation
	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSave = (updatedQues) => {
		axios
			.put(`http://localhost:3030/update/${updatedQues.id}`, updatedQues)
			.then((res) => {
				dispatch(updateQuestion({ id: updatedQues.id, data: updatedQues }));
				setIsEditing(false);
				toast.success("Question updated successfully");
			})
			.catch((err) => console.error(err));
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	// Delete operation
	const handleDelete = () => {
		setShowModal(true);
	};

	const confirmDelete = () => {
		axios
			.delete(`http://localhost:3030/delete/${ques.id}`)
			.then((res) => {
				dispatch(deleteQuestion(ques.id));
				toast.success("Question deleted successfully");
			})
			.catch((err) => console.error(err));
		setShowModal(false);
	};

	return (
		<div className="container">
			<div className="card w-full bg-slate-700 shadow-2xl ml-1 mb-12">
				{isEditing ? (
					<EditQuestion
						ques={ques}
						onSave={handleSave}
						onCancel={handleCancel}
					/>
				) : (
					<div className="card-body text-start">
						<h2 className="card-title text-2xl">
							{serialNumber}. {ques.question}
						</h2>
						<div className="text-xl pl-7 py-4">
							<p>a. {ques.option1}</p>
							<p>b. {ques.option2}</p>
							<p>c. {ques.option3}</p>
							<p>d. {ques.option4}</p>
						</div>
						<p className="text-xl font-bold text-slate-400">
							Answer: {ques.ans}
						</p>
						<span className="flex pt-6">
							<button
								className="btn btn-primary w-24 mr-6"
								onClick={handleEditClick}
							>
								EDIT
							</button>
							<button className="bg-red-600 py-2" onClick={handleDelete}>
								DELETE
							</button>
						</span>
					</div>
				)}
			</div>
			<DeleteConfirmationModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				onDelete={confirmDelete}
			/>
		</div>
	);
};

export default UpdateQuestion;