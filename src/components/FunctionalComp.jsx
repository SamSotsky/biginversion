// import all dependencies
import React from 'react'

// function
// "props" can be anything (variable)
const FunctionalComp = (props) => {
    return (
        <div>
            <h1>{props.lastname}, {props.firstname}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.haircolor}</p>
        </div>

    )
}


// export
export default FunctionalComp