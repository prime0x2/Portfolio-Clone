import React from "react";
import useScroll from "../../hooks/useScroll";
import "./Navbar.scss";

const Navbar = () => {
	const { scrollY, scrollDirection } = useScroll();

	const [mobileNav, setMobileNav] = React.useState(false);

	return (
		<>
			<nav
				className={
					scrollY >= 30
						? scrollDirection === "down"
							? "navbar active"
							: "navbar hide"
						: "navbar"
				}
			>
				<div
					className="left"
					data-aos="zoom-in"
					data-aos-duration="700"
				>
					<img src="/logo.svg" alt="" />
				</div>

				<div className="right">
					<ul>
						<li data-aos="fade-down" data-aos-duration="700">
							<a href="#about">
								<span>01.</span>About
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="700"
						>
							<a href="#experience">
								<span>02.</span>Experience
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="500"
							data-aos-duration="700"
						>
							<a href="#work">
								<span>03.</span>Work
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="600"
							data-aos-duration="700"
						>
							<a href="#contact">
								<span>04.</span>Contact
							</a>
						</li>
					</ul>

					<div
						className="resume"
						data-aos="fade-down"
						data-aos-delay="700"
						data-aos-duration="700"
					>
						<a href="/">Resume</a>
					</div>
				</div>

				<div className="mobile-nav">
					<button
						className="mobile-nav-toggle"
						onClick={() => setMobileNav(true)}
					>
						<svg viewBox="0 0 100 80" width="40" height="40">
							<rect fill="#64ffda" width="100" height="8"></rect>
							<rect
								fill="#64ffda"
								y="30"
								width="100"
								height="8"
							></rect>
							<rect
								fill="#64ffda"
								y="60"
								width="100"
								height="8"
							></rect>
						</svg>
					</button>
				</div>
			</nav>

			<aside
				className={mobileNav ? "mobile-navbar active" : "mobile-navbar"}
			>
				<ul>
					<li>
						<a href="#about">
							<span>01.</span>About
						</a>
					</li>
					<li>
						<a href="#experience">
							<span>02.</span>Experience
						</a>
					</li>
					<li>
						<a href="#work">
							<span>03.</span>Work
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>04.</span>Contact
						</a>
					</li>
				</ul>

				<div className="resume">
					<a href="/">Resume</a>
				</div>

				<button
					className="close-menu"
					onClick={() => setMobileNav(false)}
				>
					<svg
						viewPort="0 0 12 12"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="1"
							y1="25"
							x2="25"
							y2="1"
							stroke="#64ffda"
							stroke-width="3"
						/>
						<line
							x1="1"
							y1="1"
							x2="25"
							y2="25"
							stroke="#64ffda"
							stroke-width="3"
						/>
					</svg>
				</button>
			</aside>
		</>
	);
};

export default Navbar;
