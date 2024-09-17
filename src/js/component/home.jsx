import React from "react";
import NavBar from "./NavBar.jsx"
import CardBody from "./CardBody.jsx"
import Cards from "./Cards.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar
				text1="Start Bootstrap"
				text2="Home"
				text3="About"
				text4="Services"
				text5="Contact"
			/>
			<div className="container">
				<CardBody
					title="A Warm Welcome"
					description="Aprender a programar será tan importante como saber un segundo o tercer idioma. Al final, este también es un idioma, o más bien un lenguaje, en el que está estructurado todo el mundo digital, que es el que rige nuestra economía, negocios e interacciones sociales."
					buttonLabel="Call to action!"
				/>
				<div className="row">
					<div className="col-3">
						<Cards
							imageURL="https://picsum.photos/id/1/500/325"
							tittle="Card Title1"
							description="Sin duda uno de los perfiles laborales más importantes en el mundo tecnológico, es el de los programadores. La programación es una habilidad relevante para cualquier profesional de hoy en día y es una ventaja competitiva para liderar los nuevos retos que presenta el mundo."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-3">
						<Cards
							imageURL="https://picsum.photos/500/325"
							tittle="Card Title2"
							description="Sin duda uno de los perfiles laborales más importantes en el mundo tecnológico, es el de los programadores. La programación es una habilidad relevante para cualquier profesional de hoy en día y es una ventaja competitiva para liderar los nuevos retos que presenta el mundo."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-3">
						<Cards
							imageURL="https://picsum.photos/500/325"
							tittle="Card Title3"
							description="Sin duda uno de los perfiles laborales más importantes en el mundo tecnológico, es el de los programadores. La programación es una habilidad relevante para cualquier profesional de hoy en día y es una ventaja competitiva para liderar los nuevos retos que presenta el mundo."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col">
						<Cards
							imageURL="https://picsum.photos/500/325"
							tittle="Card Title4"
							description="Sin duda uno de los perfiles laborales más importantes en el mundo tecnológico, es el de los programadores. La programación es una habilidad relevante para cualquier profesional de hoy en día y es una ventaja competitiva para liderar los nuevos retos que presenta el mundo."
							buttonLabel="Find Out More!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
