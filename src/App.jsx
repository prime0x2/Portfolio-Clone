import React from 'react';
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
			</main>
		</>
	);
};

export default App;
