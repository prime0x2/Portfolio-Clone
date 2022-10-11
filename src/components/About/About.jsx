import React from "react";
import "./About.scss";

const About = () => {
	return (
		<section className="about" id="about">
			<div
				className="about_container"
				data-aos="fade-up"
				data-aos-duration="700"
			>
				<h2>About Me</h2>

				<div className="inner">
					<div className="about_text">
						<div>
							<p>
								Hello! My name is Brittany and I enjoy creating
								things that live on the internet. My interest in
								web development started back in 2012 when I
								decided to try editing custom Tumblr themes —
								turns out hacking together a custom reblog
								button taught me a lot about HTML & CSS!
							</p>
							<p>
								Fast-forward to today, and I’ve had the
								privilege of working at{" "}
								<a
									href="https://us.mullenlowe.com/"
									rel="noopener noreferrer"
									target="_blank"
								>
									an advertising agency
								</a>
								,{" "}
								<a
									href="https://starry.com/"
									rel="noopener noreferrer"
									target="_blank"
								>
									a start-up
								</a>
								,{" "}
								<a
									href="https://www.apple.com/"
									rel="noopener noreferrer"
									target="_blank"
								>
									a huge corporation
								</a>
								, and{" "}
								<a
									href="https://scout.camd.northeastern.edu/"
									rel="noopener noreferrer"
									target="_blank"
								>
									a student led design studio
								</a>
								. My main focus these days is building
								accessible, inclusive products and digital
								experiences at{" "}
								<a
									href="https://upstatement.com/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Upstatement
								</a>{" "}
								for a variety of clients.
							</p>
							<p>
								I also recently{" "}
								<a
									href="https://www.newline.co/courses/build-a-spotify-connected-app"
									rel="noopener noreferrer"
									target="_blank"
								>
									launched a course
								</a>{" "}
								that covers everything you need to build a web
								app with the Spotify API using Node &amp; React.
							</p>
							<p>
								Here are a few technologies I’ve been working
								with recently:
							</p>
						</div>
						<ul className="skill-list">
							<li>JavaScript (ES6+)</li>
							<li>TypeScript</li>
							<li>React</li>
							<li>Eleventy</li>
							<li>Node.js</li>
							<li>WordPress</li>
						</ul>
					</div>

					<div className="about_pic">
						<div className="wrapper">
							<img src="/images/me.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
