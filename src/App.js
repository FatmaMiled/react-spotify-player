import React, {Component} from 'react';

import './App.css';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {artist: '', spotifyID : '7ocwZINHqO9DZJgFtc1B20'};
		this._onClick = this._onClick.bind(this)
		this._onChange = this._onChange.bind(this)
	}
	_onClick() {
    this.setState({spotifyID:this.state.artist})
		console.log('_onClick');
 	}

	_onChange(event) {
	   this.setState({artist:event.target.value}, () => console.log(this.state.artist))
	}


	render() {
let urii="spotify:artist:".concat(this.state.spotifyID) 
	  return (
	    <div className="App">
	      <header className="App-header">
	  <div class="form-group">
	    <label for="input">Artist Spotify ID : </label> 
	    <input onChange={this._onChange} type="text" id="input" placeholder="artist spotify ID"/>
	    <button onClick={this._onClick}>Search</button>
	<hr/>
	  </div>
		<SpotifyPlayer
		  uri={urii}
		  size={size}
		  view={view}
		  theme={theme}
		/>
	      </header>
	    </div>
	  );
	}
}

export default App;
