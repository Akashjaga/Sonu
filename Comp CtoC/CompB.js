import React from 'react'
class CompB extends React.Component{
    render (props){
        return <div>
            <h1>Comp B</h1>
            <h3>ID : {this.props.a}</h3>
        </div>
    }
}
export default CompB