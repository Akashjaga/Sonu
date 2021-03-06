import React from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
class ContactApp extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            contacts : [],
            setHandler : {}
        }
        }
        setContactHandler = (contact) =>{
            this.setState({setHandler:contact})
            console.log(contact);
        }
        componentDidMount = () =>{
            Axios.get ('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then ((response)=>{
                this.setState({contacts:response.data})
            })
            .catch(()=>{})
        }
    render () {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.contacts.length>0?<React.Fragment><ContactList contact={this.state.contacts} method1={this.setContactHandler}/></React.Fragment> : null
                        }
                        
                    </div>
                    <div className="col-md-4">
                        {
                        Object.keys(this.state.setHandler).lenght>0 ? <React.Fragment>  <ContactDetails contact={this.state.setHandler}/> </React.Fragment> : null
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ContactApp