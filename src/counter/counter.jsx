import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increaseCount, decreaseCount, resetCount } from '../actions';

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
				<p>Count: {this.props.count}</p>
				<button
					onClick={this.props.increaseCount}
					className="btn btn-primary"
				>
					Increase
				</button>
				<button
					onClick={this.props.decreaseCount}
					className="btn btn-warning"
				>
					Decrease
				</button>
				<button
					onClick={this.props.resetCount}
					className="btn btn-default"
				>
					Reset
				</button>
			</div>
		);
	}
}

Counter.propTypes = {
	count: PropTypes.number,
	increaseCount: PropTypes.func,
	decreaseCount: PropTypes.func,
	resetCount: PropTypes.func
};

const mapStateToProps = state => {
	return {
		count: state.count
	};
};
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => {
			dispatch(increaseCount());
		},
		decreaseCount: () => {
			dispatch(decreaseCount());
		},
		resetCount: () => {
			dispatch(resetCount());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
