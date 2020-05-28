import React, { Component } from 'react';


class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: JSON.stringify("WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, FROM CRADLE TO GRAVE"),
      introduction: "CONTACT US"
    };
  }

  render() {
    const { quote, introduction } = this.state;
    return (

      <div id="menuContact" className="App" >
        <div className="bgContact">

          <div className="contactContent">
            <div className="contactIntro">
              <h2>{introduction}</h2>
            </div>
            <div className="contactQuote">
              <div class="border"></div>
              <form class="contact-form" action="index.html" method="post">
                <input type="text" class="contact-form-text" placeholder="Your name" />
                <input type="email" class="contact-form-text" placeholder="Your email" />
                <input type="text" class="contact-form-text" placeholder="Your phone" />
                <textarea class="contact-form-text" placeholder="Your message"></textarea>
                <input type="submit" class="contact-form-btn" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
