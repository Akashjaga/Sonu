import React from 'react'
class Message extends React.Component{
    state = {
        message :"Hello"
    }
    updatmrngemsg= () =>{
        this.setState({message: "Good Morning"})
    }
    updatnightemsg = ()=>{
        this.setState({message:"Good Night"})
    }
    render (){
    return <div>
        <h1>Message Comp</h1>
        <h3>Message : {this.state.message}</h3>
        <button onClick={this.updatmrngemsg}>gm</button>
        <button onClick={this.updatnightemsg}>gn</button>
    </div>
}
}
export default Message