import React from "react";
import { connect } from "react-redux";
import { getActs, getContacts } from "../actions";

class HomePage extends React.Component {
  state = {
    randomGenerated: {
      act: "",
      contact: ""
    }
  };
  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    const token = localStorage.getItem("token");
    this.props
      .getContacts(this.props.user.id, token)
      .then(async () => {
        await this.props.getActs(this.props.user.id, token);
      })
      .then(async () => {
        await this.handleGenerateRandom();
      });
  }


  handleGenerateRandom = () => {
    console.log(":: HANDLE GENERATE RANDOM");
    console.log(":: ACTS ::" + JSON.stringify(this.props.acts));
    console.log(":: CONTACTS ::" + JSON.stringify(this.props.contacts));
    var randomContact = this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ];
    var randomAct = this.props.acts[
      Math.floor(Math.random() * this.props.acts.length)
    ];
    if (randomContact !== undefined && randomAct !== undefined) {
      this.setState({
        randomGenerated: {
          act: randomAct.description,
          contact: `${randomContact.contactFirst} ${randomContact.contactLast}`
        }
      });
    }
  };
  render() {
    if (this.props.isGettingActs) {
      return <div>Loading ...</div>;
    }
    if (this.props.isGettingContacts) {
      return <div>Loading ...</div>;
    }
    console.log(
      ":: RENDER OF HOMEPAGE :: " + JSON.stringify(this.state.randomGenerated)
    );
    return (
      <div>
          
            <div>
              <div>
                {this.state.randomGenerated.contact}
              </div>
              <div>
                {this.state.randomGenerated.act}
              </div>
            </div>
            <div className="generate-btn" onClick={this.handleGenerateRandom}>
              Generate a new act of kindness
            </div>
          
        <div className="login-filler" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(":: HOMEPAGE USER OBJECT IS ::" + JSON.stringify(state.user));
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error,
    contacts: state.contacts,
    acts: state.acts,
    isGettingActs: state.isGettingActs,
    isGettingContacts: state.isGettingContacts
  };
};

export default connect(
  mapStateToProps,
  { getActs, getContacts }
)(HomePage);
