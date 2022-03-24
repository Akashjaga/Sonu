import React from 'react'
class ContactList extends React.Component{
  getContact=(contact)=>{
    this.props.method1(contact)
    console.log(contact);
  }
  render () {
    return <div>
      <h1>ContactDetails</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className='table table-hover'>
              <thead className='bg-dark text-white'>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Place</th>
                </tr>
              </thead>
                <tbody>
                  {this.props.contact.map((contact)=>{
                      return (
                        <tr key={contact.login.uuid} onClick={this.getContact.bind(this, contact)}>
                          <td>{contact.login.uuid.substring(32)}</td>
                          <td>{contact.name.first}</td>
                          <td>{contact.email}</td>
                          <td>{contact.location.country}</td>
                        </tr>
                      )
                  })}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  }
}
export default ContactList