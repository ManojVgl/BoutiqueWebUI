import { Button, Table } from 'react-bootstrap';
import React from "react";

// redux mapping
import { useDispatch, useSelector } from "react-redux";
import {
    productsSelector, GetOrderDetails, GetOrders, GetOrderStatus, UpdateOrderStatus
} from "../../app/redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const MyOrders = () => {

    // set up dispatch
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Mobileno, setMobileno] = useState(0);
    const [OrderNo, setOrderNo] = useState(0);
    // fetch data from our store
    const {
        loading,
        error,
        Orders,
        OrderDetails,
        OrderStatus,

    } = useSelector(productsSelector);

    const sumTotal = arr =>
        arr.reduce((sum, { offerPrice, Quantity }) => sum + offerPrice * Quantity, 0)


    const onTextValueChange = (e) => {
        if (e.target.id == "Mobileno") {
            setMobileno(e.target.value)
        }
        if (e.target.id == "OrderNo") {
            setOrderNo(e.target.value)
        }

    }
    const getOrders = () => {
        console.log("am getting orders")
        dispatch(GetOrders(OrderNo, Mobileno));
    }
    const GetSalesDetails = (OrderNo) => {
        dispatch(GetOrderDetails(Mobileno, OrderNo));
        dispatch(GetOrderStatus(OrderNo, Mobileno));
    }
    const onGoToCheckOut = () => {
        console.log("am here in to go to checkout")
        navigate('/Home', { state: { id: 0, color: 'green' } });
    }
    // render the items
    const renderItems = () => {

        // loading state
        if (loading) return <strong>Loading please wait...</strong>;

        // error state
        if (error) return <strong>Items not available at this time</strong>;

        // regular data workflow
        return (



            <div className="Container">

                <Table responsive >
                    <thead>
                        <tr>
                            <th>
                                <label htmlFor="mobileno">Mobile #</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Mobileno"
                                    onChange={onTextValueChange}
                                    value={Mobileno}
                                /></th>


                            <th>
                                <label htmlFor="orderno">Order #</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="OrderNo"
                                    onChange={onTextValueChange}
                                    value={OrderNo}
                                /> </th>


                        </tr>
                        <tr>
                            <th></th>

                            <th ><Button className='btn btn-primary' onClick={() => getOrders()}> Search</Button></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Table responsive>
                                    <thead>

                                        <tr>

                                            <th className="table-primary">Order#</th>
                                            <th className="table-secondary">Order Date</th>
                                            <th className="table-primary">Customer Name - Mob#</th>
                                            <th className="table-secondary">Total Amount</th>
                                            <th className="table-primary">Billing Address</th>
                                            <th className="table-secondary">Shipping Address</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Orders.map((row, i) => (
                                            <tr >
                                                <td className="table-primary"><Button onClick={() => GetSalesDetails(row.salesID)} >{row.salesID}</Button></td>
                                                <td className="table-secondary">{row.salesDT}</td>
                                                <td className="table-primary">{row.customerName + "-" + row.billingMobNo}</td>
                                                <td className="table-secondary">{row.totalAmount}</td>
                                                <td className="table-primary">{row.billingAddress + " " + row.billingEmail + "-" + row.billingState + "-" +
                                                    row.billingCity + "-" + row.sillingCountry}</td>
                                                <td className="table-secondary">{row.shippingAddress + " " + row.shippingEmail + "-" + row.shippingState + "-" +
                                                    row.shippingCity + "-" + row.shippingCountry}</td>
                                            </tr>


                                        ))}
                                    </tbody>
                                </Table>
                            </td>

                            <td>
                                <Table responsive>
                                    <thead>

                                        <tr className="table-info" >

                                            <th >Product</th>
                                            <th >Qty</th>
                                            <th>ProductRate</th>
                                            <th >SubTotal</th>



                                        </tr>

                                    </thead>
                                    <tbody>
                                        {OrderDetails.map((row, i) => (
                                            <tr className="table-info" >
                                                <td>{row.productDesc}</td>
                                                <td >{row.productQty}</td>
                                                <td >{row.productRate}</td>
                                                <td >{row.productRate * row.productQty}</td>
                                            </tr>


                                        ))}
                                    </tbody>
                                </Table>
                            </td>

                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <Table responsive>
                                    <thead>

                                        <tr className="table-info" >

                                            <th >Shipped Date</th>
                                            <th >Status</th>
                                            <th>Status Date</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {OrderStatus.map((row, i) => (
                                            <tr className="table-info" >
                                                <td>{row.deliveryStartDT}</td>
                                                <td >{row.status}</td>
                                                <td >{row.updatedDTTime}</td>
                                               
                                            </tr>


                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr><tr>
                            <td colSpan="3"> </td>

                        </tr>
                    </tfoot>
                </Table>


            </div >



        )
    };

    // template
    return (
        // onWheel={()=> {dispatch(fetchProducts("Sarees"));}}
        <div  >
            {renderItems()}
        </div>
    );
};

export default MyOrders;





