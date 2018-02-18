import React from 'react';
import './ProductContainer.css';
import { Grid, Row, Col, Image, Button, Table } from 'react-bootstrap';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProductContainer-flex">
        <Grid>
            <Row className="show-grid" className="ProductContainer-displaybody" className="card">
          <Col xs={12} sm={3} md={3} lg={3} >
            <center> <Image src="http://img.bbystatic.com/BestBuy_US/images/products/1010/1010226_sa.jpg" responsive /> </center>
          </Col>

          <Col xs={12} sm={9} md={9} lg={9}>
            <div>
              <center> <h3> DISHWASHEER </h3>        </center>
              <center><strong> <h1>$ 45,000 </h1> </strong> </center>
            </div>

            <div>
              <center> <h4> DESCRIPTION </h4>        </center>
              <p> This is just an HTTP response of course, not the actual image. To extract the image body content from the response, we use the blob() method (defined on the Body mixin, which is implemented by both the Request and Response objects.) </p>
            </div>

            <div>
              <center><Button className="btn-product-view">Add to Cart </Button> </center>
            </div>
            <div>
              <Table responsive>
                <thead>
                  <tr>

                    <th>Feature</th>
                    <th>Specification</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>Manufacturer</td>
                    <td>Table cell</td>

                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Category</td>

                  </tr>
                </tbody>
              </Table>
            </div>

          </Col>
        </Row>
          </Grid>
      </div>
    );
  }
}

export default ProductContainer;
