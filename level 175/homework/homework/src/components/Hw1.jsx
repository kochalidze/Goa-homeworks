import React, { useRef } from 'react'

// 1) გააკეთეთ ორი ყუთი ერთმანეთისგან შორს, ერთის დაკლიკების ან დაჰოვერების დროს აისქროლოს მეორე ყუთთან.

export default function Hw1() {
	const div1Ref = useRef(null);
	const div2Ref = useRef(null);

	const scrollToDiv2 = () => {
		div2Ref.current.scrollIntoView({ behavior: "smooth" });
	}
	const scrollToDiv1 = () => {
		div1Ref.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className='container'>
			<div
				ref={div1Ref}
				onClick={scrollToDiv2}
				className='div1'
			>
				1
			</div>
			<div ref={div2Ref}
				onClick={scrollToDiv1}
				className='div2'
			>
				2
			</div>
		</div>
	)
}
