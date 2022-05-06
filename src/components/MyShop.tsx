import React, { Component } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap'
import '../myStyle/styleMyShop.css'

let url = `${process.env.PUBLIC_URL}/assets/samsung.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/star.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/pdetail.svg`;
interface IState {
    actFetchProductsRequest: any;
    _products: any;
    AddCart: any;
}
interface IProps {
}
export class MyShop extends Component<IState, IProps> {
    constructor(props: IState) {
        super(props)
    }

    componentDidMount() {
        this.props.actFetchProductsRequest();
    }
    render() {
        const { _products } = this.props._products;
        <img src={url} />
        if (_products.length > 0) {
            return (
                <Row>
                    <Col>
                        {
                            _products.map((item: any) => (
                                <Row>
                                    <Col> <img className="phone" src={url} />
                                    <br/>
                                        <img className= "phone1"src={url2} />
                                    </Col>
                                    {/* <h5>{item.name}</h5> */}
                                    <Col> <h3>Điện thoại Samsung Galaxy A31</h3>
                                        <h6>Galaxy A31 là mẫu smart phone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn
                                            tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin
                                            khủng lên đến 5000 mAh. </h6>
                                        <h2>6 940 000 VND</h2>
                                        <img className="star" src={url1} />
                                        <img className="star" src={url1} />
                                        <img className="star" src={url1} />
                                        <img className="star" src={url1} />
                                        <img className="star" src={url1} />
                                      <br/>
                                        
                                        <Button color="primary"  className="button">Mua ngay</Button>{' '}
                                        <Button color="success" className="button" onClick={() => this.props.AddCart(item)}>Thêm vào giỏ hàng</Button>
                                     
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                </Row>
            )
        }
        return (
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )

    }
}
const mapStateToProps = (state: any) => {
    return {
        _products: state._todoProduct,
    };
}
function mapDispatchToProps(dispatch: any) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: (item: any) => dispatch(AddCart(item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyShop)
