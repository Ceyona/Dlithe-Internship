import React from 'react'

const error = () => {
    return (
        <div className="showcase" 
        style {...{
        height: "650px", 
        display: "flex", 
        alignItems:"center", 
        color:"#fff", 
        fontsize:"30px",
        textAlign:"center"
    
        }}>
            <div className="overlay">
                <h1>Looks like this page doesn't exist</h1>
            </div>
        </div>
    )
}

export default error

