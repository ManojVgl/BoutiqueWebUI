import { Button, Table } from 'react-bootstrap';
import React from "react";
import './styles.css';

// redux mapping
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector, UpdateItemToCart
} from "../../app/redux/slices/productSlice";
import { useNavigate  } from "react-router-dom";

const SalesDetails = () => {

  // set up dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // fetch data from our store
  const {
    loading,
    error,
    CartList,

  } = useSelector(productsSelector);

  const sumTotal = arr =>
    arr.reduce((sum, { offerPrice, Quantity }) => sum + offerPrice * Quantity, 0)
  const onDeleteItemFromCart = (productID) => {
    console.log("am here to delete item", productID)
    const newArray = [];
    CartList.forEach(obj => {
      if (obj.productId !== productID) {
        newArray.push(obj)
      }
    });


    dispatch(UpdateItemToCart(newArray));
  }

  const onGoToCheckOut= ()=>{
    console.log("am here in to go to checkout")
    navigate('/checkout', { state: { id: 0, color: 'green' }} );
  }
  // render the items
  const renderItems = () => {

    // loading state
    if (loading) return <strong>Loading please wait...</strong>;

    // error state
    if (error) return <strong>Items not available at this time</strong>;

    // regular data workflow
    return (



      <div className="flcontainer">

        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>


            </tr>
          </thead>
          <tbody>
            {CartList.map((row, i) => (
              <tr key={i}>
                <td  >{i + 1} <br></br>
                  <img
                    src={"data:image/png;base64," +
                      row.photo
                    }
                    className="imgsales" alt="Responsive image"
                  /> </td>
                <td >{row.productDescription}</td>
                <td >{row.offerPrice}</td>
                <td >{row.Quantity}</td>
                <td >{row.Quantity * row.offerPrice}</td>
                <td ><Button onClick={()=>onDeleteItemFromCart(row.productId)}>X</Button></td>




              </tr>


            ))}

          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Subtotal{() => sumTotal(CartList)}</td>
              <td colSpan="3">Shipping : Enter your address to view shipping options. Calculate shipping</td>
            </tr><tr>
              <td colSpan="3">Total {() => sumTotal(CartList)}</td>
              <td colSpan="3"><Button onClick={onGoToCheckOut} > PROCEED TO CHECKOUT</Button></td>
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

export default SalesDetails;





