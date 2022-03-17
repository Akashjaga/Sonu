import React from 'react'
import CompB from './CompB';
class CompA extends React.Component{
    ID = 101
        Name = "Akash"
        Sal = 35000;
    render(){
        
        return <div>
            <h2>Class Component</h2>
            <CompB a={this.ID} b={this.Name} c={this.Sal}/>
        </div>
    }
}
export default CompA