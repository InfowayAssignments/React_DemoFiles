import React from 'react'
import DisplayEmpList from './DisplayEmpList'

function EmpList() {
    // const names=["smith","john","olive","peter","astro"]
    // const namelist=names.map(n=><h2>{n}</h2>)
    const employees=[{Id:"101",Name:"Smith",Salary:20000},
                    {Id:"102",Name:"Jaya",Salary:30000},
                    {Id:"103",Name:"Jaya",Salary:25000},
                    {Id:"104",Name:"Sushma",Salary:10000},
                    {Id:"105",Name:"Rekha",Salary:50000},
                    ];
    // const emplist= employees.map(emp=><h3>Employee name is {emp.Name} and Salary is {emp.Salary}</h3>)
          
    const emplist= employees.map(emp=><DisplayEmpList key={emp.Id} e={emp} />)
        return (
        <div>
            {/* {names.map(n=><h2>{n}</h2>)} */}
            {/* {namelist} */}
            {/* {employees.map(emp=><h3>Employee name is {emp.Name} and Salary is {emp.Salary}</h3>)} */}
            {emplist}
          
        </div>
    )
}

export default EmpList
