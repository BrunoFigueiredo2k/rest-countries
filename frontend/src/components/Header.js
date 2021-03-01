import React from 'react'

function Header() {
    // TODO
    const toggleDarkLightMode = () => {

    } 

    return (
        <div className="header">
            <div className="container">
                <h1 style={{fontWeight: '800', fontSize: '34px'}}>Where in the world? <button className="header-btn" onClick={{toggleDarkLightMode}}>Dark Mode</button></h1>
            </div>
        </div>
    )
}

export default Header
