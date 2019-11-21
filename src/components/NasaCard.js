import React from 'react';

const NasaCard = props => {
    return (
        <div className='file-list'>
            <h2>{props.title}</h2>
            <img className='nasaImage' alt='Astronomy Image of the Day' src={props.url}/>
            <p>{props.explanation}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default NasaCard; 