import React from "react";
import ReactDOM from "react-dom";

const io = require("socket.io-client");

import { connect } from "react-redux";

import Body from "../components/Body.jsx";

import setSocket from "../actions/socketActions";

@connect(store => {
  return {
    user: store.user,
    socket: store.socket
  };
})
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // connects to socket when component loads
    let socket = io.connect("http://localhost:3000");
    // loads event listeners after
    this.afterConnect(socket);
    //set socket state to new socket
    // this.props.dispatch(setSocket(socket));
  }

  afterConnect(socket) {
    socket.on("connect_failed", () => {
      console.log("failed to connect to socket...");
    });
    // for all client-side listeners
    socket.on("fetchTweets", data => {
      console.log("fetching tweets..");
      // fetch all tweets related to them
      console.log("tweet return data: ", data);
      // set all sentiment values gathered from there to state
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Navigation />
        <Body />
      </div>
    );
  }
}
