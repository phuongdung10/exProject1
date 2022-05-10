import React from "react";
import { connect } from 'react-redux';
import {Table} from 'reactstrap'
function CartArticulated ({items}:{items:any}) {
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
    return(
<div>
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
                    <td>{(Number(TotalCart) + 1388000).toLocaleString('vi', { style: 'currency', currency: 'VND' })} </td>
                </tr>
                    </tbody>
                </Table>

</div>
    );
}

const mapStateToProps = (state: { _todoProduct: any; }) => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}
export default connect(mapStateToProps, null)(CartArticulated)
