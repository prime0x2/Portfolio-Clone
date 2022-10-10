import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<header className='hero_section'>
			<h5>Hi, my name is</h5>
			<h1>Brittany Chiang.</h1>
			<h1>I build things for the web.</h1>
			<p>
				I’m a software engineer specializing in building (and
				occasionally designing) exceptional digital experiences.
				Currently, I’m focused on building accessible, human-centered
				products at <span>Upstatement</span>.
			</p>
			<div className='button'>
				<button>Check out my course!</button>
			</div>
		</header>
	);
};

export default Header;
