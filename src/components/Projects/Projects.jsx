import React from "react";
import { projects } from "../../data";
import ProjectCard from "../Shared/ProjectCard";
import "./Projects.scss";

const Projects = () => {
	return (
		<section className="projects">
			<div className="container">
				<h2 data-aos="fade-up" data-aos-duration="700">
					Other Noteworthy Projects
				</h2>
				<a
					data-aos="fade-up"
					data-aos-duration="700"
					href=""
					target="_blank"
				>
					view the archive
				</a>

				<ul className="projects_grid">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</ul>

				<div className="more_button">
					<button className="more_button">Show More</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
