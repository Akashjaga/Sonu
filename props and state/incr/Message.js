import React from 'react'
import Msg from './Msg'
class Message extends React.Component{
    id = 101;
    Name = "Akash"
    state = {
        message : "Hello"
    }
    updatemrngmsg = () => {
        this.setState({message: "Good Morning"})
    }
    updateevngmsg =()=>{
        this.setState({message:"Good Evening"})
    }
    updatenightmsg =()=>{
        this.setState({message:"Good Night"})
    }
    render (){
        return <div>
            <h2>Message Comp</h2>
            <h3> Message : {this.state.message}</h3>
            <button onClick={this.updatemrngmsg}>Gm</button>
            <button onClick={this.updateevngmsg}>Ge</button>
            <button onClick={this.updatenightmsg}>Gn</button> <hr/>
            <Msg a={this.id} b={this.Name}/>
        </div>
    }
}
export default Message
