import "./scss/App.scss";
import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
    return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route exact path="/" element={ <Home /> } />
					<Route path="/Login" element={ <Login /> } />
					<Route path="*" element={ <Navigate to="/" /> } />
				</Routes>
			</main>
			<Footer />
		</div>
    )
}

export default App
