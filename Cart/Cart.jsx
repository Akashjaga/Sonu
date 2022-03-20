import React from 'react'
class Cart extends React.Component{
    state={
        name : "REEBOK Energy Runner",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1r8_MMsdfmYBnI1mDxXsT64dK_-TFj2mow&usqp=CAU",
        price : 2000,
        Qty : 1
}
incrhandler = () =>{
    this.setState({Qty:this.state.Qty + 1})
}
decrhandler = () => {
    this.setState({Qty:this.state.Qty - 1})
}
    render (){
        return <div>
            <div className="container">
                <div className="ro">
                    <div className="col-md-06">
                        <table className='table table-hover bg-success'>
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td><img src={this.state.image} height="100px"  width='130px' alt=""/></td>
                                    <td>{this.state.price}</td>
                                    <td><i class="fa fa-plus" onClick={this.incrhandler}></i>
                                    {this.state.Qty}
                                    <i class="fa fa-minus" onClick={this.decrhandler}></i></td>
                                    <td>{this.state.price*this.state.Qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Cart