import React, { Component } from 'react'
import ColumnFragment from './ColumnFragment'
import './Tablefragment.css'
import styles from "./Tablefragment.module.css"
const tablestyle={
    backgroundColor:'red',
    color:'white',
    width:'200px'
}
class TableFragment extends Component {
    render() {
        return (
              // <table style={{background:'yellow'}}> // <table style={tablestyle}>
            <>
            {/* <table>
                    <thead>
                        <tr>
                            <ColumnFragment/>
                        </tr>
                    </thead>
                </table> */}
                <h1 className={styles.success}>success</h1>
                <ColumnFragment/>
           </> 
        )
    }
}

export default TableFragment
