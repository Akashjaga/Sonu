import React from 'react'
class ContactList extends React.Component{
  getContact = (contact)=>{
   console.log(contact)
   this.props.method1(contact)
  }
render (){
  return <div>
    <h1>Contact List</h1>
    <pre>{JSON.stringify(this.props)}</pre>
    <div className="container">
      <div className="row">
        <div className="col">
          <table className='table table-hover'>
            <thead className='bg-dark text-white'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
            </thead>
            <tbody>
              {this.props.contact.map ((contact)=>{
                return (
                  <tr key={contact.email} onClick={this.getContact.bind(this, contact)}>
                    <td>{contact.login.uuid.substring(30)}</td>
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