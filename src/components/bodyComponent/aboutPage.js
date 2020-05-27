import React, { Component } from 'react';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      quote: " adalah perusahaan software di Jakarta, Indonesia yang bergerak dalam bidang pencatatan transaksi serta keuntungan dan analisis data berdasarkan AI.",
      introduction: "OUR PROFILE"
    };
  }

  getInitialState = () => {
    return { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { quote, introduction, windowWidth } = this.state;
    return (

      <div id="menuAbout" className="App" >
        <div className="bgAbout">

          <div className="aboutContent">
            <div className="aboutIntro">
              <h3>{introduction}</h3>
            </div>
{            console.log(windowWidth)
}            
            <div className="aboutQuote">
              <img src="/image/about.svg" alt="BROKEN" />
              <div className="quote">
                <p className="quote1"><b className="companyName"><font>Profity</font></b>{quote}</p>

                {windowWidth >= 768 &&
                  <p className="quote2">
                    <h2> <b>S</b>ecure . <b>A</b>ccurate . <b>T</b>rusted </h2> .</p>
                }
              </div>
            </div>
            {windowWidth < 768 &&
              <div className="quote2">
                <h2> <b>S</b>ecure . <b>A</b>ccurate . <b>T</b>rusted </h2> .</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
