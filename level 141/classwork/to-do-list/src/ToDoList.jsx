import React, { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState(['სწავლა', 'დავალებების დაწერა']);
	const [newTasks, setNewTask] = useState('');

	const inputValue = (e) => {
		setNewTask(e.target.value);
	};

	const addTask = () => {
		if (newTasks.trim() !== '') {
			setTasks(t => [...t, newTasks]);
			setNewTask('');
		}
	};

	const remoweTask = (index) => {
		const arr = tasks.filter((_, i) => i !== index);
		setTasks(arr);
	};

	const taskUp = (index) => {
		if (index > 0) {
			const taskUparr = [...tasks];
			[taskUparr[index], taskUparr[index - 1]] = [taskUparr[index - 1], taskUparr[index]];
			setTasks(taskUparr);
		}
	};

	const taskDown = (index) => {
		if (index < tasks.length - 1) {
			const taskUparr = [...tasks];
			[taskUparr[index + 1], taskUparr[index]] = [taskUparr[index], taskUparr[index + 1]];
			setTasks(taskUparr);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-4">
			<div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
				<h1 className="text-3xl font-bold text-center text-blue-700 mb-6 italic">MDF-List</h1>
				<div className="flex gap-2 mb-4">
					<input
						type="text"
						placeholder="Enter task!"
						value={newTasks}
						onChange={inputValue}
						className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<button
						onClick={addTask}
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
					>
						Add
					</button>
				</div>
				<ol className="space-y-3">
					{tasks.map((el, index) => (
						<li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-sm">
							<span className="flex-1 italic">{el}</span>
							<div className="flex gap-2 ml-2">
								<button
									onClick={() => remoweTask(index)}
									className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
								>
									Delete
								</button>
								<button
									onClick={() => taskUp(index)}
									className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-sm"
								>
									Up
								</button>
								<button
									onClick={() => taskDown(index)}
									className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
								>
									Down
								</button>
							</div>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default ToDoList;
