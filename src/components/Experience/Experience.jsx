import React from "react";
import { jobs } from "../../data";
import "./Experience.scss";

const Experience = () => {
	const [tab, setTab] = React.useState(0);
	const [job, setJob] = React.useState(jobs[0]);

	React.useEffect(() => {
		setJob(jobs[tab]);
	}, [tab]);

	return (
		<section className="experience" id="experience">
			<div
				className="container"
				data-aos="fade-up"
				data-aos-duration="700"
			>
				<h2>Where I’ve Worked</h2>

				<div className="inner">
					<div className="tablist">
						<button
							className={tab === 0 ? "active" : ""}
							onClick={() => setTab(0)}
						>
							Upstatement
						</button>
						<button
							className={tab === 1 ? "active" : ""}
							onClick={() => setTab(1)}
						>
							Scout
						</button>
						<button
							className={tab === 2 ? "active" : ""}
							onClick={() => setTab(2)}
						>
							Apple
						</button>
						<button
							className={tab === 3 ? "active" : ""}
							onClick={() => setTab(3)}
						>
							Scout
						</button>
						<button
							className={tab === 4 ? "active" : ""}
							onClick={() => setTab(4)}
						>
							Starry
						</button>
						<button
							className={tab === 5 ? "active" : ""}
							onClick={() => setTab(5)}
						>
							MullenLowe
						</button>
					</div>

					<div className="tabcontent">
						<h3>
							<span>{job.title} </span>
							<span className="company">
								@ <a href="">{job.company}</a>
							</span>
						</h3>

						<p>{job.time}</p>

						<ul>
							{job.points.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
