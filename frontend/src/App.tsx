import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterAsDonor from "./components/RegisterAsDonor";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Mission />
			<RegisterAsDonor />
			<Footer />
		</>
	);
}

export default App;
