import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<>
			<section className='contact' id='contact'>
				<div className='container'>
					<div className='contact_inner'>
						<h2 className='numbered_heading'>Whats's Next?</h2>
						<h2 className='title'>Get In Touch</h2>

						<p>
							Although I’m not currently looking for any new
							opportunities, my inbox is always open. Whether you
							have a question or just want to say hi, I’ll try my
							best to get back to you!
						</p>

						<a
							className='email_link'
							href='mailto:prime13337@gmail.com'
						>
							Say Hello
						</a>
					</div>
				</div>
			</section>

			<div className='footer'>
				<ul className='social-links'>
					<li>
						<a href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-github'
							>
								<title>GitHub</title>
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-instagram'
							>
								<title>Instagram</title>
								<rect
									x='2'
									y='2'
									width='20'
									height='20'
									rx='5'
									ry='5'
								></rect>
								<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
								<line
									x1='17.5'
									y1='6.5'
									x2='17.51'
									y2='6.5'
								></line>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-twitter'
							>
								<title>Twitter</title>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-linkedin'
							>
								<title>LinkedIn</title>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
								<rect x='2' y='9' width='4' height='12'></rect>
								<circle cx='4' cy='4' r='2'></circle>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-codepen'
							>
								<title>CodePen</title>
								<polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'></polygon>
								<line x1='12' y1='22' x2='12' y2='15.5'></line>
								<polyline points='22 8.5 12 15.5 2 8.5'></polyline>
								<polyline points='2 15.5 12 8.5 22 15.5'></polyline>
								<line x1='12' y1='2' x2='12' y2='8.5'></line>
							</svg>
						</a>
					</li>
				</ul>

				<div>
					<a className='copyright' href=''>
						<div className='designer'>
							Designed & Built by Prime0x2
						</div>
						<div className='github_states'>
							<span>
								<StarIcon />
								<span>5082</span>
							</span>

							<span>
								<ForkIcon />
								<span>2356</span>
							</span>
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default Contact;

const StarIcon = () => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-star'
		>
			<title>Star</title>
			<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
		</svg>
	);
};

const ForkIcon = () => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-git-branch'
		>
			<title>Git Fork</title>
			<line x1='6' y1='3' x2='6' y2='15'></line>
			<circle cx='18' cy='6' r='3'></circle>
			<circle cx='6' cy='18' r='3'></circle>
			<path d='M18 9a9 9 0 0 1-9 9'></path>
		</svg>
	);
};
