import { Component } from "react";

class App extends Component {
  // initial state
  state = {
    counter: 0,
  };

  // === handle increment and decrement ===
  counter = (params) => {
    const { counter } = this.state;

    if (params == "-") counter > 0 && this.setState({ counter: counter - 1 });
    else
      this.setState({
        counter: counter + 1,
      });
  };
  // === handle increment and decrement ===

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={() => this.counter("-")}
        >
          -
        </button>

        <h2>{this.state.counter}</h2>

        <button
          style={{
            cursor: "pointer",
          }}
          onClick={() => this.counter("+")}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
