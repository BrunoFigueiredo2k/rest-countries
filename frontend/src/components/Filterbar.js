import React from 'react'

function Filterbar() {
    const handleKeyDownSearch = (e) => {
        if (e.key === 'Enter') {
            // Filter countries
            console.log(e.target.value);
        }
    }

    const filterByRegion = () => {

    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <i class="fas fa-search"></i><input type="text" placeholder="Search for a country..." onKeyDown={handleKeyDownSearch} className="search-input"/>
            </div>
            <div className="col-lg-6">
            <select className="dropdown-filter" onChnage={filterByRegion}>
                <option value="" disabled selected>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">europe</option>
                <option value="oceania">Oceania</option>
            </select>
            </div>
        </div>
    )
}

export default Filterbar
