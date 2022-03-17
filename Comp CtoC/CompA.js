import React from 'react'
import CompB from './CompB'

class CompA extends React.Component{
    Emp_id= 101;
    Emp_Loc= 'Bangalore';
    Emp_sal = 45000;
    render(){
        return <div>
            <h1>Comp A</h1>
            <h3> ID : {this.Emp_id}</h3>
            <CompB a={this.Emp_id} b={this.Emp_Loc}/>
        </div>
    }
}
export default CompA