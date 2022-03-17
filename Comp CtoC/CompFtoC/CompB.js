import React from 'react'
class CompB extends React.Component{
    render (props){
        return <div>
            <h2>Class Component</h2>
            <h4>name{this.props.a}</h4>
            <h4>sal{this.props.b}</h4>
            <h4>place{this.props.c}</h4>
        </div>
    }
}
export default CompB