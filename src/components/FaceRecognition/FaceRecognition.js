import React from 'react';
import PropTypes from 'prop-types';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log('imageUrl', imageUrl, 'boxes', boxes );
  return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                {boxes.map(box => {
                  return <div key={box.topRow} className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                  })
                }  
            </div>
        </div>
  );
}

FaceRecognition.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  boxes: PropTypes.array,
  topRow: PropTypes.number,
  rightCol: PropTypes.number,
  bottomRow: PropTypes.number,
  leftCol: PropTypes.number
};

export default FaceRecognition
