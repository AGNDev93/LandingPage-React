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
				<div className="row">
					<div className="col-sm-12 text-justify">
						<CardBody
							title="A Warm Welcome!"
							description="Aprender a programar será tan importante como saber un segundo o tercer idioma. Al final, este también es un idioma, o más bien un lenguaje, en el que está estructurado todo el mundo digital, que es el que rige nuestra economía, negocios e interacciones sociales."
							buttonLabel="Call to action!"
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-3 text-justify">
						<Cards
							imageURL="https://picsum.photos/id/1/500/325"
							title="Programador"
							description="La programación es una habilidad relevante para cualquier profesional de hoy en día y es una ventaja competitiva para liderar los nuevos retos que presenta el mundo."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-sm-3 text-justify">
						<Cards
							imageURL="https://picsum.photos/id/20/500/325"
							title="React"
							description="React permite la creación de componentes reutilizables, lo cual facilita enormemente el desarrollo y el mantenimiento de las páginas y aplicaciones web."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-sm-3 text-justify">
						<Cards
							imageURL="https://picsum.photos/500/325"
							title="Beneficios Dev"
							description="Una de las ventajas de aprender a programar es que te da otro punto de vista de los problemas, ayuda a pensar de forma más lógica y encontrar las soluciones."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-sm-3 text-justify">
						<Cards
							imageURL="https://picsum.photos/seed/picsum/500/325"
							title="¿Es un lenguaje?"
							description="La programación se trata de un lenguaje que se divide en otros dependiendo de para qué se esté aplicando. Es un lenguaje internacional."
							buttonLabel="Find Out More!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
