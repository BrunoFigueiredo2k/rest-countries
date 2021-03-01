import React from 'react'
import { Link } from "react-router-dom";

function CountryPage(props) {
    return (
        <div className="section">
            <Link to="/">Back</Link>
            <div className="row">
                <div className="col-lg-6">
                    <img src=".." />
                </div>
                <div className="col-lg-6">
                    <h3>Country name</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <b>Native Name:</b><span></span>
                            <b>Population:</b><span></span>
                            <b>Region:</b><span></span>
                            <b>Sub Region:</b><span></span>
                            <b>Capital:</b><span></span>
                        </div>
                        <div className="col-lg-6">
                            <b>Top Level Domain:</b><span></span>
                            <b>Currencies:</b><span></span>
                            <b>Languages:</b><span></span>
                        </div>
                    </div>
                    <div style={{display: 'inline'}}>
                        <b>Border Countries:</b>
                        {
                            // TODO: map through all the bordering countries and place them inside tags
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryPage
