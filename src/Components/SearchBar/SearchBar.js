import React from 'react';
import './SearchBar.css';

export class searchBar extends React.Component {
	render() {
		return (
			<div className="SearchBar">
  				<input placeholder="Enter A Song, Album, or Artist" />
  				<button className="SearchButton">SEARCH</button>
			</div>
			);
	}
}

