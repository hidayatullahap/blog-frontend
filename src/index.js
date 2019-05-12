import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import 'antd/dist/antd.css';
import Header from './header';
import Content from './content';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header></Header>
				<Content></Content>
			</div>
		);
	}
}

WebFont.load({
	google: {
		families: ['Roboto:300,400,700']
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);