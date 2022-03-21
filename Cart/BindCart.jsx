import React from "react"
class Cart extends React.Component{
    state = {
    Name : "T-ROCK Socks Stylish Cricket",
    Image : "https://rukminim1.flixcart.com/image/800/960/k5bcscw0pkrrdj/shoe/6/f/h/7-11410-navy-t-rock-11410-navy-original-imafnzqrcpvd5ebw.jpeg?q=50",
    Price : 899,
    Qty : 1
    }
    updateHandler = (value) => {
        this.setState({Qty : value})
    }
    render () {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-06">
                        <table className="table table-hover bg-info">
                            <thead>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.state.Name}</td>
                                <td><img src={this.state.Image} width="80px" alt=""/></td>
                                <td>{this.state.Price}</td>
                                <td><i class="fa fa-plus" onClick={this.updateHandler.bind(this, this.state.Qty +1)} >
                                    </i>{this.state.Qty}
                                    <i class="fa fa-minus" onClick={this.updateHandler.bind(this, this.state.Qty -1)} ></i></td>
                                <td>{this.state.Qty*this.state.Price}</td>
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