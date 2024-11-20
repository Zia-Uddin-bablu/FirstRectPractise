import { render } from "@testing-library/react";
// import React from "react";
import React, { Component } from "react";

// const Person1 = (props) => {
//   return (
//     <div>
//       <h1>
//         Name : {props.name} And Age: {props.age} Years
//       </h1>
//       <h2>Profession: {props.children}</h2>
//     </div>
//   );
// };

// const Person2 = (props) => {
//   return (
//     <div>
//       <h1>
//         Name: {props.name} And Age : {props.age} Years
//       </h1>
//       <h2>Profession: {props.children}</h2>
//     </div>
//   );
// };

// export { Person1, Person2 };

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Name: {this.props.name} And Age: {this.props.age}
        </h1>
        <h4> Profession : {this.props.children}</h4>
      </div>
    );
  }
}

export default Person;
