import React from "react";

class Oopcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      name: "",
      loader: false,
      userInfo: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({ loader: true }));
    // go api and fetch somthing
    //
    const apiData = axios.get("")
    // this.state.userInfo 
    this.setState(() => ({ userInfo: apiData }));

  }
  componentWillUnmount() {
    this.setState(() => ({ loader: false }));
  }

  handleChange() {
    this.setState((prevState) => ({
      count: this.state.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>Motide emi bado, emi number {this.state.count}</h1>
        {/* <button>increace</button> */}
        <button onClick={this.handleChange}> increase</button>
      </>
    );
  }
}

export default Oopcomponent;
