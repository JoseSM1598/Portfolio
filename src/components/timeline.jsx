import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Internship at IBM <span>Summer 2019</span></h2>
                        <p> Working under Carl-Johan Nakamura in the Cognitive Enterprise Data Platform division of IBM. I worked on various tasks while interning here, as well as a large DevOps project that spanned multiple weeks.
                          - Developed a back-end architecture to provide Machine Learning Models as a service to clients. The architecture made use of the Bazel, Docker, and Kubernetes software. Development of the architecture took place primarily on a Linux Virtual Machine via the aid of Vagrant.
                          - Created queries to update and maintain IBM's databases</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Engineering & Analytics Director at Duke Undergraduate Machine Learning<span> 2018-Present</span></h2>
                        <p>I work with the exec board to device yearly Datathon, a data oriented competition in a similar vein to Hackathons.
                          We also Organize yearly Machine Learning Day, a day to get the duke student body acquainted with machine learning opportunities on campus, as well as provide them with networking opportunities with companies such as Accenture, Google, and IQVIA.
                          On top of that, I am the primary maintainer of our organizations website, which can be found <a href = "https://dukeml.org/" target = "blank"> here</a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Statistics Teacher Assistant<span> 2017-Present</span></h2>
                        <p>I have TA'd for the following courses: Introductory Statistics (STA 101), Regression Analysis (STA 210),
                        Data Science (STA 199), and Mathematical Statistics (STA 611).</p>
                        <p> My roles include instructing lab sections, grading homework, and monitoring exams.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at Duke University<span> 2016-2020</span></h2>
                        <p>I am an undergraduate at Duke University studying Computer Science and Statistics.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
