import "./scss/App.scss";
import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Welcome from "./components/pages/Welcome";
import Register from "./components/pages/Register";

function App() {
    return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route exact path="/" element={ <Welcome /> } />
					<Route path="/Login" element={ <Login /> } />
					<Route path="/Register" element={ <Register /> } />
					<Route path="/Home" element={<Home />} />
					<Route path="*" element={ <Navigate to="/Home" /> } />
				</Routes>
			</main>
			<Footer />
		</div>
    )
}

export default App
