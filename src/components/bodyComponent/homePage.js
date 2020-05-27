import React, { Component } from 'react';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quote:JSON.stringify( "WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, FROM CRADLE TO GRAVE"),
        introduction:"WE ARE THE DIEHL GROUP ARCHITECTS, A FULL-SERVICE DESIGN AND CONSULTING FIRM SPECIALIZING IN FORENSIC ARCHITECTURE, QUALITY ASSURANCE, AND EXPERT WITNESS TESTIMONY."
    };
}

  render() {
    const {quote,introduction}=this.state;
    return (

      <div id="menuHome" className="App" >
        <div className="bgHome">

          <div className="homeContent">
            <div className="homeIntro">
              {introduction}
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
