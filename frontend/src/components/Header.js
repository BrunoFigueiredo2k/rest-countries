import React from 'react'

function Header() {
    // TODO
    const toggleDarkLightMode = () => {

    } 

    return (
        <div className="container">
            <div className="row header">
                <div className="col-6">
                    <h1>Where in the world?</h1>
                </div>
                <div className="col-6">
                    <button onClick={{toggleDarkLightMode}}>Dark Mode</button>
                </div>
            </div>
        </div>
    )
}

export default Header
