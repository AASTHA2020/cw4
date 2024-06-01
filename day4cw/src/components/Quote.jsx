import React from 'react';
import './Quote.css';

export default function Quote({ content, author }) {
    return (
        <div className="quote-container">
            <div className="quote-content">
                <h1 className="quote-text">{content}</h1>
                <p className="quote-author">{author}</p>
            </div>
        </div>
    );
}
