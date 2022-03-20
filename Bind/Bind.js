import React from 'react'
class Bind extends React.Component{
    state = {
        message : "Hey, Buddy..!"
    }    
    updateMessage = (value) => {
        this.setState({message : value})
    }
    render () {
        return <div>
        <h2>Bind Component</h2>
        <h3>Message : {this.state.message}</h3>
        <button onClick={this.updateMessage.bind (this, "Welcome")} className="btn-danger">welc</button>
        <button onClick={this.updateMessage.bind (this, "Please Dine in")}className="btn-success">Dine</button>
        <button onClick={this.updateMessage.bind (this, "Thank you visit Again")}className="btn-primary">Tq</button>
        </div>
    }
}
export default Bind