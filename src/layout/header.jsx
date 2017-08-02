import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
	return (<h1>{props.appName}</h1>);
}

Header.propTypes = {
	appName: PropTypes.string
};
