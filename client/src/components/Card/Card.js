import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

export class Card extends React.Component {

    render() {
        const { appImage, appTitle, appText, appRoute, match } = this.props;
        
        return (
            <div className="card-container container col-md-4 text-center">
                    <div className="card">
                    <Link to={appRoute}><img className="card-img-top" src={appImage} alt="Card"></img></Link>
                        <div className="card-body">
                            <h5 className="card-title">{appTitle}</h5>
                            <p className="card-text">{appText}</p>
                        </div>
                    </div>
            </div>
        );
    }
}