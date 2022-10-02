import React    from "react";
import template from "./Books-Details.spec.js";

class BooksDetails extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BooksDetails;
