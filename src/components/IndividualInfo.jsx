import React from 'react';
import PropTypes from 'prop-types';

function IndividualInfo(props){
  const images = require.context('./../img', true);
  let image = images('./'+ props.image);

  var imageSize = {
    width: '250',
    margin: '30'
  }
  var infoBg = {
    fontSize: '20',
    backgroundColor: 'rgb(255, 255, 255, 0.6)',
    padding: '25'
  }
  return(
    <div className="row">
      <div className="col-md-4">
        <img style={imageSize} src={image}/>
      </div>
      <div className="col-md-8" style={infoBg}>
        <h2 style={{fontWeight:'bold'}}>{props.role}</h2>
        <h4>{props.name}</h4>
        <hr/>
        <p>{props.information}</p>
        <h4>List of movies:</h4>
          {props.movie.map((show) =>
          <p>{show}</p>
        )}
      </div>
    </div>
  );
};

IndividualInfo.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  movie: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired
};

export default IndividualInfo;
