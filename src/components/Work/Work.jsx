import React from "react";
import "./Work.scss";

const ExternalIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-external-link"
		>
			<title>External Link</title>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
			<polyline points="15 3 21 3 21 9"></polyline>
			<line x1="10" y1="14" x2="21" y2="3"></line>
		</svg>
	);
};

const GithubIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-github"
		>
			<title>GitHub</title>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
		</svg>
	);
};

const Work = () => {
	return (
		<section className="work scroll-mt-10" id="work">
			<div className="container">
				<h2 data-aos="fade-up" data-aos-duration="700">
					Some Things I’ve Built
				</h2>

				<ul className="inner">
					<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content">
							<div>
								<p className="project_overline">
									Featured Project
								</p>
								<h3 className="project_title">
									<a href="" target="_blank">
										Halcyon Theme
									</a>
								</h3>
								<div className="project_desc">
									<p>
										A minimal, dark blue theme for VS Code,
										Sublime Text, Atom, iTerm, and more.
										Available on{" "}
										<a
											href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
											target="_blank"
											rel="noopener noreferrer"
										>
											Visual Studio Marketplace
										</a>
										,{" "}
										<a
											href="https://packagecontrol.io/packages/Halcyon%20Theme"
											target="_blank"
											rel="noopener noreferrer"
										>
											Package Control
										</a>
										,{" "}
										<a
											href="https://atom.io/themes/halcyon-syntax"
											target="_blank"
											rel="noopener noreferrer"
										>
											Atom Package Manager
										</a>
										, and{" "}
										<a
											href="https://www.npmjs.com/package/hyper-halcyon-theme"
											target="_blank"
											rel="noopener noreferrer"
										>
											npm
										</a>
										.
									</p>
								</div>
								<ul className="project_techs">
									<li>VS Code</li>
									<li>Sublime Text</li>
									<li>Atom</li>
									<li>iTerm2</li>
									<li>Hyper</li>
								</ul>
								<div className="project_links">
									<a href="" target="_blank">
										<GithubIcon />
									</a>
									<a href="" target="_blank">
										<ExternalIcon />
									</a>
								</div>
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/work1.png" alt="" />
								</div>
							</a>
						</div>
					</li>

					<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content">
							<div>
								<p className="project_overline">
									Featured Project
								</p>
								<h3 className="project_title">
									<a href="" target="_blank">
										Spotify Profile
									</a>
								</h3>
								<div className="project_desc">
									<p>
										A web app for visualizing personalized
										Spotify data. View your top artists, top
										tracks, recently played tracks, and
										detailed audio information about each
										track. Create and save new playlists of
										recommended tracks based on your
										existing playlists and more.
									</p>
								</div>
								<ul className="project_techs">
									<li>React</li>
									<li>Styled Components</li>
									<li>Express</li>
									<li>Spotify API</li>
									<li>Heroku</li>
								</ul>
								<div className="project_links">
									<a href="" target="_blank">
										<GithubIcon />
									</a>
									<a href="" target="_blank">
										<ExternalIcon />
									</a>
								</div>
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/work2.png" alt="" />
								</div>
							</a>
						</div>
					</li>

					<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content">
							<div>
								<p className="project_overline">
									Featured Project
								</p>
								<h3 className="project_title">
									<a href="" target="_blank">
										Build a Spotify Connected App
									</a>
								</h3>
								<div className="project_desc">
									<p>
										Having struggled with understanding how
										the Spotify OAuth flow works, I made the
										course I wish I could have had. Unlike
										tutorials that only cover a few concepts
										and leave you with half-baked GitHub
										repositories, this course covers
										everything.
									</p>
								</div>
								<ul className="project_techs">
									<li>React</li>
									<li>Styled Components</li>
									<li>Spotify API</li>
									<li>Express</li>
								</ul>
								<div className="project_links">
									<a href="" target="_blank">
										<GithubIcon />
									</a>
									<a href="" target="_blank">
										<ExternalIcon />
									</a>
								</div>
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/work3.png" alt="" />
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Work;
