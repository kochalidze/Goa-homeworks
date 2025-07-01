

function Main(prop) {
	
	return (
		<div className="main">
			<img src={prop.imgUrl} />
			<div className="conteiner">			
				<h1>{prop.name}</h1>
				<p>{prop.descrip}</p>
			</div>
		</div>
	)
}

export default Main;