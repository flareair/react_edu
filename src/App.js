import React from 'react';
import Header from './layout/HeaderContainer';
import CounterContainer from './counter/CounterContainer';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<CounterContainer />
			</div>
		);
	}
}

export default App;
