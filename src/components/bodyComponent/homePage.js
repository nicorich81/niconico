import React, { Component } from 'react';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quote:JSON.stringify( "We ensure data security and proven analytic result throughout our service, from Start to End"),
        introduction:"GROUP, A FULL-SERVICE TRANSACTION DATA TRACKER AND DATA ANALYTIC TO IMPROVE BUSINESS' PROFIT WITH A SECURE, ACCURATE AND TRUSTED SERVICE."};
}

  render() {
    const {quote,introduction}=this.state;
    return (

      <div id="menuHome" className="App" >
        <div className="bgHome">

          <div className="homeContent">
            <div className="homeIntro">
            WE ARE <b className="companyName">Profity</b> {introduction}
            </div>
            <div className="homeQuote">
              <img src="/image/undraw_metrics_gtu7.svg" alt="BROKEN" />
              {quote}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
