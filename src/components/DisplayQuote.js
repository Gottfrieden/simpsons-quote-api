import React from 'react';

function DisplayQuote({singleQuote}) {
    return (
        <div className="quote-container">
            <img src={singleQuote.image} />
            <h1>{singleQuote.quote}</h1>
            <p>{singleQuote.character}</p>
        </div>
    );
};

export default DisplayQuote;