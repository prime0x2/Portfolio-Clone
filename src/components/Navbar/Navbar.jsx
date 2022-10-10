import React from 'react';
import useScroll from '../../hooks/useScroll';
import './Navbar.scss';

const Navbar = () => {
	const { scrollY, scrollDirection } = useScroll();

	const [mobileNav, setMobileNav] = React.useState(false);

	return (
		<>
			<nav className='navbar'>
				<div className='left'>
					<img src='/logo.svg' alt='' />
				</div>

				<div className='right'>
					<ul>
						<li>
							<a href='#about'>
								<span>01.</span>About
							</a>
						</li>
						<li>
							<a href='#experience'>
								<span>02.</span>Experience
							</a>
						</li>
						<li>
							<a href='#work'>
								<span>03.</span>Work
							</a>
						</li>
						<li>
							<a href='#contact'>
								<span>04.</span>Contact
							</a>
						</li>
					</ul>

					<div className='resume'>
						<a href='/'>Resume</a>
					</div>
				</div>

				<div className='mobile-nav'>
					<button
						className='mobile-nav-toggle'
						onClick={() => setMobileNav(true)}
					>
						<svg viewBox='0 0 100 80' width='35' height='35'>
							<rect fill='#64ffda' width='100' height='8'></rect>
							<rect
								fill='#64ffda'
								y='30'
								width='100'
								height='8'
							></rect>
							<rect
								fill='#64ffda'
								y='60'
								width='100'
								height='8'
							></rect>
						</svg>
					</button>
				</div>
			</nav>

			<aside
				className={mobileNav ? 'mobile-navbar active' : 'mobile-navbar'}
			>
				<ul>
					<li>
						<a href='#about'>
							<span>01.</span>About
						</a>
					</li>
					<li>
						<a href='#experience'>
							<span>02.</span>Experience
						</a>
					</li>
					<li>
						<a href='#work'>
							<span>03.</span>Work
						</a>
					</li>
					<li>
						<a href='#contact'>
							<span>04.</span>Contact
						</a>
					</li>
				</ul>

				<div className='resume'>
					<a href='/'>Resume</a>
				</div>

				<button
					className='close-menu'
					onClick={() => setMobileNav(false)}
				>
					<svg
						viewport='0 0 12 12'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='1'
							y1='25'
							x2='25'
							y2='1'
							stroke='#64ffda'
							strokeWidth='3'
						/>
						<line
							x1='1'
							y1='1'
							x2='25'
							y2='25'
							stroke='#64ffda'
							strokeWidth='3'
						/>
					</svg>
				</button>
			</aside>
		</>
	);
};

export default Navbar;
