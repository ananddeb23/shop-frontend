import React from 'react';
import './Addproductbydesc.css';

import { DropdownButton, MenuItem, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';


function FieldGroup({
  id, ...props
}) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}
class Addproductbydesc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="addbydesc">
        <ButtonToolbar >
          <DropdownButton
            bsStyle="Default"
            title="Category"
            onChange={this.props.handlecategory}
          >
            <MenuItem className="Addproductbydesc-dropdown" eventKey="1" value="Appliances">Appliances</MenuItem>
            <MenuItem className="Addproductbydesc-dropdown" eventKey="2" value="TVs">TVs</MenuItem>

          </DropdownButton>
        </ButtonToolbar>
        <br />
        <form>
          <FieldGroup
            id="brand"
            type="text"
            placeholder="Brand"
            onChange={this.props.handlebrand}
          />
          <FieldGroup
            id="quantity"
            type="number"
            className="quantity"
            placeholder="Quantity"
            onChange={this.props.handlequantity}
          />
          <FieldGroup
            id="pricefrom"
            type="number"

            placeholder="Price From  "
            onChange={this.props.handlepricefrom}
          />
          <FieldGroup
            id="priceto"
            type="number"

            placeholder="Price To  "
            onChange={this.props.handlepriceto}
          />
        </form>
      </div>
    );
  }
}

export default Addproductbydesc;
