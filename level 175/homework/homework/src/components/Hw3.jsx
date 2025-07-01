import React, { useEffect, useRef, useState } from 'react'
// 3) გააკეთეთ timer სადაც გექნებათ დაპაუზების და დარესტარების ფუნქციონალი. 

export default function Hw3() {
	const [time, setTime] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setTime(prev => prev + 1);
			}, 1000);
		}
		return () => clearInterval(intervalRef.current);
	}, [isPaused]);

	function handlePause() {
		setIsPaused(prev => !prev);
	}

	const handleReset = () => {
		setTime(0);
		setIsPaused(false);
	}

	return (
		<div className='timerConteiner'>
			<p>{time}</p>
			<button onClick={handlePause}>{isPaused ? 'continue' : 'Pause'}</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}
