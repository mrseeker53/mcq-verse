import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditQuestion from "../EditQuestion/EditQuestion";
import axios from "axios";
import { updateQuestion, deleteQuestion } from "../Redux/questionsSlice";

const Question = ({ ques, serialNumber }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);

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
			})
			.catch((err) => console.error(err));
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	// Delete operation
	const handleDelete = () => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this question?"
		);
		if (confirmDelete) {
			axios
				.delete(`http://localhost:3030/delete/${ques.id}`)
				.then((res) => {
					dispatch(deleteQuestion(ques.id));
				})
				.catch((err) => console.error(err));
		}
	};

	return (
		<div className="container">
			<div className="card w-full bg-slate-700 shadow-2xl ml-1 mt-12">
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
		</div>
	);
};

export default Question;