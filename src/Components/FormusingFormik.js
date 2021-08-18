import { useFormik } from 'formik'
import React from 'react'
const validateEmployee=(empdata)=>{
    const errors={}
    if(!empdata.Name)
        errors.Name="Name is required"
    else if(empdata.Name.length>20)
        errors.Name="Length should be less than 20"
    
        if(!empdata.Email)
        errors.Email="Email is required"
    else if(!/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z]+)?\.([a-zA-Z]{2,3})$/.test(empdata.Email))
        errors.Email="Invalid Email"
    
    if(!empdata.Salary)
        errors.Salary="Salary is required"

    return errors
}
const FormusingFormik=()=> {
    const formik=useFormik({
        initialValues:{
            Id:'',
            Name:'',
            Email:'',
            Salary:''
        },
        validate:validateEmployee,
        onSubmit:values=>{
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className="container">
        <h1>Add Employee</h1>
        <div className="col-6">
            <form onSubmit={formik.handleSubmit}>
                <label>Employee ID</label>
                <input type="text" name="Id" className="form-control" 
                value={formik.values.Id} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <label>Employee Name</label>
                <input type="text" name="Name" className="form-control" 
                value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
               {formik.touched.Name && formik.errors.Name ?
                <span style={{color:'red'}}>{formik.errors.Name}</span>:null }<br/>
                <label>Employee Email</label>
                <input type="text" name="Email" className="form-control" 
                value={formik.values.Email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 <span style={{color:'red'}}>{formik.errors.Email}</span><br/>
                <label>Employee Salary</label>
                <input type="text" name="Salary" className="form-control" 
                value={formik.values.Salary} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                   <span style={{color:'red'}}>{formik.errors.Salary}</span><br/>
                <br/>
                <button className="btn btn-primary" type="submit">Create Employee</button>
            </form>
        </div>
      </div>
    )

}

export default FormusingFormik

      
