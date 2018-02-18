import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';


function FieldGroup({
  id, ...props
}) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}
class RemoveProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="brand"
            type="text"
            onChange={this.props.handleremove}
            placeholder="Product Id "
          />
        </form>

        <br />    <br />
      </div>
    );
  }
}

export default RemoveProduct;
