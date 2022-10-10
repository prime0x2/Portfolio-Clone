import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import LeftSide from './components/SideElement/LeftSide';
import RightSide from './components/SideElement/RightSide';

const App = () => {
	return (
		<>
			<Navbar />
			<LeftSide />
			<RightSide />
			<main>
				<Header />
				<About />
				<Contact />
			</main>
		</>
	);
};

export default App;
