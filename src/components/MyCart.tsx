import React, { Component } from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from './actions/index';
import { Button, ButtonGroup, ButtonToggle, Row, Col, Table } from 'reactstrap'
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import "../myStyle/styleMyCart.css"
let url = `${process.env.PUBLIC_URL}/assets/samsung.svg`;

function MyCart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }: { items: any, IncreaseQuantity: any, DecreaseQuantity: any, DeleteCart: any }) {
    //  console.log(items)
    let ListCart: any[] = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * 6940000;
        //  items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price: number, tonggia: number) {
        return Number(6940000 * tonggia).toLocaleString('vi', { style: 'currency', currency: 'VND' });
    }


    return (
        <Row>
            <Col>
                <Table>
                    <tbody>
                        {
                            ListCart.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td><img className="phone" src={url} /></td>
                                        <td> <h3>Điện thoại Samsung Galaxy A31</h3>
                                            <h6>Galaxy A31 là mẫu smart phone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn
                                                tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin
                                                khủng lên đến 5000 mAh. </h6>
                                            <h2>6 940 000 VND</h2></td>

                                        <td>
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() => DecreaseQuantity(key)}>
                                                    {" "}
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <ButtonToggle color="secondary">{item.quantity}</ButtonToggle>{' '}
                                                <Button
                                                    onClick={() => IncreaseQuantity(key)}>
                                                    {" "}
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup>
                                            
                                            

                                        </td>
                                        <td>{TotalPrice(item.price, item.quantity)}
                                        <span color="secondary" className = "delete" style={{cursor:"pointer"}} 
                                        onClick={() => DeleteCart(key)}>X</span>
                                         </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Table borderless className="cost">
                    <tbody>
                <tr>
                    <td>SubTotal</td>
                    <td>{Number(TotalCart).toLocaleString('vi', { style: 'currency', currency: 'VND' })} </td>

                </tr>
                <tr>
                    <td>Tax</td>
                    <td>{(1388000).toLocaleString('vi', { style:'currency', currency: 'VND' })}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{(Number(TotalCart) + 1388000).toLocaleString('vi', { style: 'currency', currency: 'VND' })} '</td>
                </tr>
                    </tbody>
                </Table>
            </Col >
        </Row >
    )
}
const mapStateToProps = (state: { _todoProduct: any; }) => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}
export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(MyCart)
