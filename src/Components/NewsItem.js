import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsurl, author, date,source } = this.props;

        return (
            <div className='my-3'>
                <div className="card mx-2" >
                    <div>

                <span className=" badge rounded-pill bg-danger" style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                            {source}
                        </span>
                    </div>
                    <img src={!imageurl ? "https://images.moneycontrol.com/static-mcnews/2024/03/BeFunky-collage-2024-03-03T074509.865.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> by {author ? author : "Unknown"} on {new Date(date).toUTCString()}  </small></p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-info btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
