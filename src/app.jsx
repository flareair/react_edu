import React from 'react';
import ReactDom from 'react-dom';

import Header from './layout/header';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header appName="Application"/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('main'));
