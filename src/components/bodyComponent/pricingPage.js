import React, { Component } from 'react';


class PricingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "We understand that there is many variety in business' needs. So we've got plans that can fit your business needs.",
      title: "FIT YOUR NEED, FIT YOUR PRICE"
    };
  }

  render() {
    const { title, desc } = this.state;
    return (

      <div id="menuPricing" className="App" >
        <div className="bgPricing">

          <div className="pricingContent">
            <h2 className="pricingTitle">{title}</h2>
            <p className="pricingDesc">{desc}</p>

            <div className="row">

              <div className="column">
                <div className="card">
                  <img className="cardImg" src="/image/tier_1.svg" alt="BROKEN" />
                  <div className="cardText">
                    <h3>TIER 1</h3>
                    <ul>
                      <li>Mencatat barang masuk </li>
                      <li>Mencatat barang keluar</li>
                      <li>Mencatat hasil keuntungan </li>
                    </ul>
                  </div>
                  <div className="tierPrice">
                    $ 10 / Month
                  <div className="button_cont" align="center">
                      <a className="loginButton" href="">BUY</a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <img className="cardImg" src="/image/tier_2.svg" alt="BROKEN" />
                  <div className="cardText">
                    <h3>TIER 2</h3>
                    <ul>
                      <li>Mencatat barang masuk dan keluar </li>
                      <li>Mencatat Keuntungan</li>
                      <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                      <li>Support 7x24 Jam</li>
                    </ul>
                  </div>
                  <div className="tierPrice">
                    $ 50 / Month
                  <div className="button_cont" align="center">
                      <a className="loginButton" href="">BUY</a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <img className="cardImg" src="/image/tier_3.svg" alt="BROKEN" />
                  <div className="cardText">
                    <h3>TIER 3</h3>
                    <ul>
                      <li>Mencatat barang masuk dan keluar </li>
                      <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                      <li>Support 7x24 Jam</li>
                      <li>Export data ke Excel</li>
                      <li>AI Prediksi Penghasilan</li>
                    </ul>
                  </div>
                  <div className="tierPrice">
                    $ 99 / Month
                  <div className="button_cont" align="center">
                      <a className="loginButton" href="">BUY</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default PricingPage;
