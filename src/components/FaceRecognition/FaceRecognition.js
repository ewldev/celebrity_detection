import React from 'react';
import PropTypes from 'prop-types';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box  }) => {
  console.log('imageUrl', imageUrl, 'box', box )
  return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>

            </div>
        </div>
  )
}

FaceRecognition.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  box: PropTypes.object,
  topRow: PropTypes.number,
  rightCol: PropTypes.number,
  bottomRow: PropTypes.number,
  leftCol: PropTypes.number
};

export default FaceRecognition
