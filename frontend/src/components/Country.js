import React from 'react';

function Country(props) {
    return (
        // TODO: onclick go to CountryPage and pass country data in props
        <div>
            // TODO: access passed props attribute and populate content
            <div class="card col-lg-4 card-country">
                <img class="card-img-top" src="#" alt=".." />
                <div class="card-body">
                    <h3>Country name</h3>
                    <b>Population: </b><span>..</span>
                    <b>Region: </b><span>..</span>
                    <b>Capital: </b><span>..</span>
                </div>
            </div>
        </div>
    )
}

export default Country
