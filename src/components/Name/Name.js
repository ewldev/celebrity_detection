import React from 'react';

const Name = ({name}) => {
    console.log('check2',name)
    return (
        <div>
            <p className='white f4'> {'The celebrity in your picture is...'}</p>
            <p className='white f3'>{name}</p>
        </div>
    );
}

export default Name;