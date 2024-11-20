import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
// import { Person1, Person2 } from "./Components/Person";
import Person from "./Components/Person";
import Book from "./Components/Book";

// Functional Component
/* function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Person1 />
    //<Person2 /> 
    </div>
  );
} 
  */

class App extends Component {
  //state? - Property of class component means for declaring any property in class then must use constructor. and state's value is an object
  //state - Only in class based component not in function based component

  // constructor() {
  //   super();
  //   this.state = {};
  // }

  // or

  state = {
    books: [
      { bookName: "1994", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" },
    ],

    otherProp: "Im some other prop",
  };

  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" },
      ],
    });
  };

  changeBookState = (newBookName) => {
    // this.state.books[0].bookName = "1974"; Wrong !
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" },
      ],
    });
  };

  render() {
    const styleh1 = {
      border: "1px solid red",
      borderRadius: "5px",
      background: "black",
      color: "white",
    };

    return (
      <div className="App">
        <h1 style={styleh1}>Book List</h1>
        <button onClick={() => this.changeBookState("NineTeenEightyFour")}>
          Change State
        </button>

        <input type="text" onChange={this.changeWithInputState} />

        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />

        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />

        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "NineTeen 84")}
        />

        <Book otherProp={this.state.otherProp} />
      </div>
    );
  }
}

export default App;

// 137 done
