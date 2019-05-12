import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import '../styles/index.less';
import '../styles/style.css';
import 'antd/dist/antd.css';

import Header from './header';
import Content from './content';

class App extends Component {
	render() {
		return (
			<div>
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