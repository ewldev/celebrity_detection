import React from 'react'
import PropTypes from 'prop-types';
import './ImageLinkForm.css'

// eslint-disable-next-line react/prop-types
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
        <div>
            <p className='f3'>
            {'This Magic Brain will detect the name of the celebrity in your picture.'}
            </p>
            <p className='f3'>
            {'Please provide an url link.'}
            </p>

            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa-2 w-70 center' type='text' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
  )
}

ImageLinkForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onButtonSubmit: PropTypes.func.isRequired
};

export default ImageLinkForm          

