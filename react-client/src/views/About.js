import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  
  render (){
    return (
      
    <div style={aboutContainer} className="jumbotron bg-primary text-white">
        <h1 className="display-3">React Movie Finder! <span role="img" aria-label="emojis">💙✨</span> </h1>
        <p className="lead">This is a simple app for searching movies with
            <a 
              href={'http://www.omdbapi.com/'} target="_blank" className="text-warning"
              rel="noopener noreferrer"
            > omdb API </a>  and
            <a
              href={'https://reactjs.org/'} target="_blank" className="text-info"
              rel="noopener noreferrer"
            > React.js </a> 
        </p>
        <p className="lead">
            <a 
              className="btn btn-secondary " href={'https://github.com/flx86/cinex'} target="_blank"
              rel="noopener noreferrer"
            >GitHub</a>
            <Link className="btn btn-link" exact to="/">Go Back To Home</Link>
        </p>
    </div> 
    )
  }  
}

// Styles
const aboutContainer = {
  width: '80%',
  margin: '80px auto'
}

export default About
