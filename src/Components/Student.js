import React from 'react'

function Student(props) {
    if(props.name==='Joker')
        throw new Error("It is not an CDAC institute name") 
    return (
        <div>
            {props.name}
            {props.children}
        </div>
    )
}

export default Student
