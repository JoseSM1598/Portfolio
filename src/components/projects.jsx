import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/ourspace.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://apps.apple.com/ec/app/ourspace-duke/id1478595510?l=en" target = "blank">OurSpace</a></h3>
										<span>Working as a Software Engineer building a web application to compliment the OurSpace
										mobile application. </span>
									</div>
								</div>
							</div>
						</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/slogo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/SLogo" target = "blank">SLogo</a></h3>
											<span>An interpreter of the Logo programming language</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/cellsociety.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/CellSociety" target = "blank">CellSociety</a></h3>
											<span>A Cellular Automata animation, with added functionality of dual simulations.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/voogasalad.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/VoogaSalad" target = "blank">VoogaSalad</a></h3>
											<span>A fighting game editor modeled after Super Smash Bros</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/sesame.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/CreditSesame_Analysis" target = "blank">Credit Sesame Report</a></h3>
											<span>A report on how delinquency might affect a customer's reliability</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/compsci.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/RetentionStudy" target = "blank">Computer Science Retention Study</a></h3>
											<span>An analysis on the retention of students within the Computer Science major, with a Shiny app</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/os.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/JoseSM1598/Operating-Systems" target = "blank">Operating Systems Projects</a></h3>
											<span>Multiple operating systems projects including a Heap Manager (C), a Thread Library (C++) and a Raft Implementation (Java)</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/aqua.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://aqua-splash.herokuapp.com/" target = "blank">Aqua Splash Power Washing</a></h3>
											<span>A website designed under the Express/Node.js Framework</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/blog-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*<div className="row">*/}
						{/*	<div className="col-md-12 animate-box">*/}
						{/*		<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>
				</section>
      </div>
    )
  }
}
