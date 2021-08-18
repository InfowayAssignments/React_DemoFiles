import React from 'react'

function DisplayEmpList({e}) {
    return (
        <div>
            <h3>Employee name is {e.Name} and Salary is {e.Salary}</h3>
        </div>
    )
}

export default DisplayEmpList
