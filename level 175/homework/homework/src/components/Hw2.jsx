
import React, {useState,useRef} from 'react'

// 2) გააკეთეთ form ელემენტი სადაც გექნებათ სამი რამ: 
// 1 სახელის შესაყვანი ველი, ასაკის შესაყვანი ველი, ღილაკი ინფოს გასაგზავნათ, 
// თქვენი მიზანია სანამ ამ ორ ველში არ იქნება შეყვანილი ინფორმაცია,
//  რომელიც ცარიელია იმას გაუკეთოთ .focus() (თუ ორივე ველი ცარიელია
//  რომელიც form-ში პირველი გვხვდება იმას გაუკეთეთ ფოკუზირება).

export default function Hw2() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const nameRef = useRef(null);
	const ageRef = useRef(null);

	const handleNameChange = (e) => {
		setName(e.target.value);
	}
	const handleAgeChange = (e) => {
		setAge(e.target.value);
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' && age === '') {
			nameRef.current.focus();
		}
		else if (name === '') {
			nameRef.current.focus();
		} else if (age === '') {
			ageRef.current.focus();
		} else {
			alert(`Name: ${name}, Age: ${age}`);
			setName('');
			setAge('');
		}
	}
  return (
	<form>
		<input type="text" value={name} ref={nameRef} onChange={handleNameChange} placeholder='Enter your name' />
		<input type="text" value={age} ref={ageRef} onChange={handleAgeChange} placeholder='Enter your age' />
		<button onClick={handleSubmit}>Submit</button>
	</form>
  )
}
