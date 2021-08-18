import React, { Component } from 'react'
import ColFrag from './ColFrag'
import UserContext,{ UserConsumer } from './UserContext'

export default class ColumnFragment extends Component {
    // static contextType =UserContext
    render() {
        return (
            <React.Fragment>
               {/* <td className="heading">rollno</td>
               <td>Name</td> */}
               {/* <h1 className={styles.success}>success</h1> */}
               {/* <UserConsumer>
                   {(uname)=><div>Hello {uname}</div>}
               </UserConsumer> */}
                    <ColFrag />
                {/* {this.context.Id}  {this.context.Name} */}

            </React.Fragment>
        )
    }
}
