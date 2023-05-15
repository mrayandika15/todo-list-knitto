import { wrapper } from "@/store";

import "@/styles/globals.css";
import React from "react";

class App extends React.Component {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(App);
