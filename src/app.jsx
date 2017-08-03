import { connect } from 'react-redux';

import React from 'react';
import Header from './layout/header';
import Counter from './counter/counter';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header appName="Application"/>
				<Counter />
			</div>
		);
	}
}

export default App;
