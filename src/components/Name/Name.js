import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name }) => {
  console.log('Name', name)
  return (
    <div>
        <p className='white f4'> {'The celebrity in your picture is...'}</p>
        <p className='white f3'>{name}</p>
    </div>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired
};

export default Name
  