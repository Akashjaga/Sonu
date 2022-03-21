import React from 'react'
import PropsB from './PropsB'
class PropsA extends React.Component{
    name = "Akash"
    Age = 23
    salary = 35000
    render () {
        return <div>  
            <h1>PropsA</h1>
            <h3>Name : {this.name}</h3>
            <h3>Age : {this.Age}</h3>
            <h3>Salary : {this.salary}</h3>
            <PropsB a={this.name} b={this.Age} c={this.salary}/>
        </div>
    }
}
export default PropsA