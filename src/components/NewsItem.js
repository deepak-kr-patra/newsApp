import '../App.css'
import React from 'react'


export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.length > 30 ? `${title.slice(0, 30)}...` : `${title}`}</h5>
                    <p className="card-text">{description.length > 95 ? `${description.slice(0, 95)}...` : `${description}`}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
