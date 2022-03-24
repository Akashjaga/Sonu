import React from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'

class ContactApp extends React.Component{
    constructor (props) {
        super (props)
        this.state ={
            contacts : [],
            selectedContact : {}
        }
    }
    getSelectedContact = (contact) =>{
        this.setState({selectedContact:contact})
    }
    componentDidMount = ( ) => {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then ((response)=>{
            this.setState({contacts: response.data})
        })
        .catch(()=>{})
    }
    render () {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
        <ContactList contact={this.state.contacts} method1={this.getSelectedContact}/>
                    </div>
                    <div className="col-md-4">
        <ContactDetails contact={this.state.selectedContact}/>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ContactApp