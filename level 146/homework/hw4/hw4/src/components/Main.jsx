
function Main() {

	const api = [
		{
			"id": 1,
			"name": "Dumbbell",
			"category": "Weight",
			"description": "A short bar with a weight at each end, used typically in pairs for exercise or muscle-building.",
			"image_url": "https://tse2.mm.bing.net/th?id=OIP.QEdXwJrn82GbrsPG01Rs6QHaHa&pid=Api&P=0&h=220"
		},
		{
			"id": 2,
			"name": "Treadmill",
			"category": "Cardio",
			"description": "A machine for running or walking while staying in place.",
			"image_url": "https://tse1.mm.bing.net/th?id=OIP.jvL8V_Cy8pDXNeJGW5rYyAHaH3&pid=Api&P=0&h=220"
		},
		{
			"id": 3,
			"name": "Kettlebell",
			"category": "Weight",
			"description": "A cast-iron or cast steel ball with a handle, used to perform many types of exercises.",
			"image_url": "https://tse2.mm.bing.net/th?id=OIP.jFrtXzvTdhDO4DEO5dagBwAAAA&pid=Api&P=0&h=220"
		},
		{
			"id": 4,
			"name": "Yoga Mat",
			"category": "Flexibility",
			"description": "A soft mat used for yoga and stretching exercises.",
			"image_url": "https://tse3.mm.bing.net/th?id=OIP._9mA7Xn-2ghY1gNi5H-oEwHaE8&pid=Api&P=0&h=220"
		},
		{
			"id": 5,
			"name": "Pull-up Bar",
			"category": "Bodyweight",
			"description": "A bar used for performing pull-ups and chin-ups.",
			"image_url": "https://tse4.mm.bing.net/th?id=OIP.0RXJWUiRgsgdcbcsVEQsGAHaFj&pid=Api&P=0&h=220"
		}
	]


	return (
		<div className="main">
			{api.map((item) => (
				<div key={item.id} className="item">
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<img src={item.image_url}/>
				</div>
			))}
		</div>
	);
}
export default Main;
