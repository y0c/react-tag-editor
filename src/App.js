import React, { Component } from 'react';
import TagEditor from './containers/TagEditor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<div className="container">
		  	<h1>Tag Editor</h1>
			<TagEditor />

		</div>
      </div>
    );
  }
}

export default App;
