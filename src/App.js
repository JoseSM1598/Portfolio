import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects	from './components/projects'
import Blog from "./components/blog";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Projects></Projects>
					{/*<Blog></Blog>*/}
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

// Color:
//
//     Green: #68b731
// Orange: #ef6e26
// Blue: #00b2b2
// Blaxk/Blue: #1b2b2b
// grey: #8d9595

export default App;
