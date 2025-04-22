import MyFoto from './assets/1.png';

function Main() {
	return(
		<div className="main">
			<div className='mainTwo'>
				<h1 className='mainH1'>Giga kochalidze</h1>
				<p>I'm still a Frontend Developer and I'm still developing, making beautiful and good websites💚</p>
				<img src={MyFoto} className='myFoto' />
				<div className='sectionDiv'>
					<h1>Hi, I’m Giga. Nice to meet you.</h1>
					<div className="paragraps">
						<p>I was 13 years old when I started learning programming. Before that, I was a football player and played quite well, but I got carried away by the field of programming and started studying at the <b>GOA</b> Academy.</p>
						<p><b>GOA</b> teaches programming very well, along with studying, it gives you the chance to get a job at the academy. I also got a job with my own determination and achieved a small success, this gave me more motivation and now I strive for big goals💚</p>
					</div>
				</div>
				<div className="conteiner">
					<div className="div">
						<h2>Frontend Developer</h2>
						<p className='p1'>I like it when I build websites and I create them the way I want.</p>
						<h4>Languages ​​I speak:</h4>
						<p> Html, css, Python, javaScript, React, React-Native</p>
						<h4>For writing code I use:</h4>
						<div>
							<p>Vs code</p>
							<p>Android Studio</p>
							<p>WebStorm</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Main;