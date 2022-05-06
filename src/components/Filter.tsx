import React from "react";
import '../myStyle/styleFilter.css';
import { Container, Row, Col } from 'reactstrap';

let url=`${process.env.PUBLIC_URL}/assets/filter1.svg`;

const Filter = (props:any) => {
    return(
        
        <Container className="filter">
            {/* <button onClick={props.addTrip}>Add a trip</button> */}
            <h1 className="rec">Filter</h1>
            
            <Row>
                <Col xs="5">
                    <h3 className="gia">Gía</h3>
                    <h3 className="tu">Từ:</h3>
                    <h3 className="tu">Đến:</h3>
                    <h3 className="gia">Đánh giá</h3>
                    <h3 className="tu">Từ:</h3>
                    <h3 className="tu">Đến:</h3>
                </Col>
                <Col xs="3">
                    <h3 className="so">0 VNĐ</h3>
                    <h3 className="so1">10 000 000 VNĐ</h3>
                    <h3 className="so2">0 Sao</h3>
                    <h3 className="so3">5 Sao</h3>
                </Col>
                <Col xs="4">
                    <img className="sao" src={url} />
                    <img className="sao1" src={url} />
                    <img className="sao2" src={url} />
                    <img className="sao3" src={url} />
                   

                
                </Col>
            
            </Row>
        </Container>
    );
}

// function Filter(){
//     return(
//         <div>
//             <h1 className="rec">Filter</h1>
//             <h3 className="gia">Gía</h3>
//             <div>từ:</div>
//             <h3 className="tu">Đến:</h3>

//         </div>
        

//     );
// }

export default Filter;
