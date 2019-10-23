import React from "react";
import axios from "axios";

class Acts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      acts: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("https://random-acts0519.herokuapp.com/api/actions", options)
      .then(res => {
        this.setState({
          acts: res.data,
          loggedIn: true
        });
      })
      .catch(error => {
        this.setState({
          loggedIn: false
        });
      });
  };

  acts = () => {
    if (this.state.loggedIn) {
      return (
        <div>
          <h2>Acts</h2>
          {this.state.acts.map(act => {
            return (
              <div key={act.id}>
                <p>{act.description}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>You need to be logged in!</div>;
    }
  };

  render() {
    return <this.acts />;
  }
}

export default Acts;