import React from 'react'
class Message extends React.Component{
    state = {
        Qty : 0
    }
    incrhandler =()=>{
        this.setState({Qty: this.state.Qty + 1})
    }
    decrhandler = () => {
        this.setState({Qty:this.state.Qty - 1})
    }
    render () {
        return <div>
            <h1>Incr/Decr Handler</h1>
            <h2>Quantity : {this.state.Qty}</h2>
            <button className='btn btn-success' onClick={this.incrhandler}>Add On</button>
            <button className='btn btn-danger' onClick={this.decrhandler}>Subs On</button>
        </div>
    }
}
export default Message