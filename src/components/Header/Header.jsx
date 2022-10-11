import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header className="hero_section">
			<h5 data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">
				Hi, my name is
			</h5>
			<h1 data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">
				Brittany Chiang.
			</h1>
			<h1
				data-aos="fade-up"
				data-aos-delay="1000"
				data-aos-duration="700"
			>
				I build things for the web.
			</h1>
			<p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700">
				I’m a software engineer specializing in building (and
				occasionally designing) exceptional digital experiences.
				Currently, I’m focused on building accessible, human-centered
				products at <span>Upstatement</span>.
			</p>
			<div
				className="button"
				data-aos="fade-up"
				data-aos-delay="1200"
				data-aos-duration="700"
			>
				<button>Check out my course!</button>
			</div>
		</header>
	);
};

export default Header;
