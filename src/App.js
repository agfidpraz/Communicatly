import React, { Component } from 'react';
import logo from './img/logo.png';
import ilustop from './img/ilustop.png';
import sponsor from './img/sponsor.png';
import cht from './img/cht.png';
import vcall from './img/vcall.png';
import custprofile from './img/custprofile.png';
import cobrowse from './img/cobrowse.png';
import mobsdk from './img/mobsdk.png';
import analytic from './img/analytic.png';
import ilusone from './img/ilusone.png';
import ilustwo from './img/ilustwo.png';
import ilusthree from './img/ilusthree.png';
import user from './img/user.png';
import mail from './img/email.png';
import message from './img/message.png';
import arrowright from './img/arrowright.png';
import imgwhite from './img/logowhite.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grahead">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              {/* <!-- Brand --> */}
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" />
                <span className="namebrand"> communicatly</span>
              </a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <!-- Navbar links --> */}
              <div className="collapse navbar-collapse d-flex flex-row-reverse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link lsnav colnav" href="#">Product</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link lsnav colnav" href="#">Resources</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link lsnav colnav" href="#">Pricing</a>
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link lsnav colnav" href="#">Developer API</a>
                  </li> 
                  <li className="nav-item">
                    <button className="nav-link btn btn-outline-success btnregist" data-toggle="modal" data-target="#myModal">Sign In</button>
                  </li> 
                </ul>
              </div> 
            </div>
          </nav>
          <div className="container">
            <div className="row bantop">
              <div className="col-xl-6 d-flex align-items-center flex-column justify-content-center text-left">
                <h1 className="p-2 titop">Live Chat for Your Team Community.</h1>
                <p className="p-2 contop">Your customer’s expectations are changing exceed them with thepower of co-browse and live chat. We help users bridge gaps.</p>
                <div className="row" style={{width: '100%'}}>
                  <div className="col-xl-8" style={{paddingLeft: '0.5rem'}}>
                    <input className="form-control inptop" type="text" placeholder="Enter Your Email"/>
                  </div>
                  <div className="col-xl-4">
                    <button className="btnsbmtemail btn btn-success">Started</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-flex align-items-center justify-content-center">
                <img src={ilustop} alt="" className="ilustop"/>
              </div>
            </div>
            <div className="text-center">
              <img src={sponsor} alt=""/>
            </div>
            <div className="container" style={{marginTop: '90px', paddingBottom: '100px'}}>
              <div className="container row">
                <div className="col-xl-5 txtbld text-left">
                  <p>Customer</p>
                  <p>Communication</p>
                  <p>Platform</p>
                </div>
                <div className="col-xl-7 text-left">
                  <p className="txtspnsr">We’re the first multi-channel messaging platform for businesses. We help users bridge gaps between customers and sales and support teams to empower all iinvoled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fitur">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <section class="kotakan text-left">
                  <img src={cht} alt="" className="icntur"/>
                  <h5 className="titur">Live Chat</h5>
                  <p className="contur">Segment costumers based on behavior so you canto deliver relevant, timely messages that are sure to convert</p>
                </section>
              </div>
              <div className="col-xl-4">
                <section class="kotakan text-left">
                  <img src={vcall} alt="" className="icntur"/>
                  <h5 className="titur">Video/Voice chat</h5>
                  <p className="contur">Forget frustrating third-perty apps. Comduct sales or support calls via video & voice chat</p>
                </section>
              </div>
              <div className="col-xl-4">
                <section class="kotakan text-left">
                  <img src={custprofile} alt="" className="icntur"/>
                  <h5 className="titur">Customer Profiles</h5>
                  <p className="contur">Learn about anf manage customers with profiles. Deliver targeted campaigns and monitor their activity.</p>
                </section>
              </div>
              <div className="col-xl-4">
                <section class="kotakantwo text-left">
                  <img src={cobrowse} alt="" className="icntur"/>
                  <h5 className="titur">Co-browsing</h5>
                  <p className="contur">See and interact with any customr’s screen for troubleshooting - no downloads required</p>
                </section>
              </div>
              <div className="col-xl-4">
                <section class="kotakantwo text-left">
                  <img src={mobsdk} alt="" className="icntur"/>
                  <h5 className="titur">Mobile SDK</h5>
                  <p className="contur">Learn about and manage customers with profiles. Deliver targeted campaigns and monitor their activity</p>
                </section>
              </div>
              <div className="col-xl-4">
                <section class="kotakantwo text-left">
                  <img src={analytic} alt="" className="icntur"/>
                  <h5 className="titur">Analytics</h5>
                  <p className="contur">Boost sales, improve support and identify successes and improvements with in-depth analitics.</p>
                </section>
              </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
              <div className="col-xl-6">
                <img src={ilusone} alt="" className="img-fluid"/>
              </div>
              <div className="col-xl-6 d-flex flex-column justify-content-center align-content-center text-left">
                <h2 className="titfit">Support with Live Chat</h2>
                <p className="contfit">Deliver faster, more personalized support with the power of co-browse and live chat. Support and manage customers through different points in their journey with Acquire’s intuitive chat platform, screen-sharing and customer profiles</p>
                <a className="decornone" href="#"><span className="learnfit">Learn More </span><img src={arrowright} alt=""/></a>
              </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
              <div className="col-xl-6 d-flex flex-column justify-content-center align-content-center text-left">
                <h2 className="titfit">Automate with our Bots</h2>
                <p className="contfit">Our intelligent bots help your team answer common questions instantly. Scale your sales and support efforts with a modern, AI-based chatbot, integrated knowledge base and all-in-one communication platform.</p>
                <a className="decornone" href="#"><span className="learnfit">Learn More </span><img src={arrowright} alt=""/></a>
              </div>
              <div className="col-xl-6">
                <img src={ilustwo} alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
              <div className="col-xl-6">
                <img src={ilusthree} alt="" className="img-fluid"/>
              </div>
              <div className="col-xl-6 d-flex flex-column justify-content-center align-content-center text-left">
                <h2 className="titfit">Engange with Customer</h2>
                <p className="contfit">Take the lead and proactive engange to boost conversion. Connect with your visitors at every touchpoint, from first browse to onboarding. Acquire’s tools deliver a personalized customer experience at scale.</p>
                <a className="decornone" href="#"><span className="learnfit">Learn More </span><img src={arrowright} alt=""/></a>
              </div>
            </div>
          </div>
          <div className="bgtopfot">
            <div className="container">
              <div className="container row" style={{height: '540px'}}>
                <div className="col-xl-6 d-flex flex-column justify-content-center align-content-center text-left">
                  <h2 className="titfot">Welcome to Communicatly</h2>
                  <div className="linefot"></div>
                  <p className="confot">We’d love to hear from you. We value your feedback. If you have any questions, ask us anytime!</p>
                </div>
                <div className="col-xl-6 d-flex flex-column justify-content-center align-content-center">
                  <section className="secgetouch d-flex flex-column justify-content-center align-content-center">
                    <span class="titgetouch">
                      Get in touch
                    </span>
                    <form class="container contact100-form validate-form d-flex flex-column justify-content-center align-content-center">

                      <div class="wrap-input100 validate-input" data-validate = "Name is required">
                        <input class="input100 form-control" type="text" name="name" placeholder="Name"/>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                          <img src={user} alt=""/>
                        </span>
                      </div>

                      <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100 form-control" type="text" name="email" placeholder="Email"/>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                          <img src={mail} alt=""/>
                        </span>
                      </div>

                      <div class="wrap-input100 validate-input" data-validate = "Message is required">
                        <textarea class="input100 form-control" name="message" placeholder="Message"></textarea>
                        <span class="focus-input100"></span>
                        <span className="symbol-input">
                          <img src={message} alt=""/>
                        </span>
                      </div>
                      <button class="btn btn-success btnsend">Send</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="fotop">
              <div className="container">
                <div className="row text-left">
                  <div className="col-xl-3">
                    <img src={imgwhite} alt=""/>
                    <span className="logowhite"> communicatly</span>
                  </div>
                  <div className="col-xl-2">
                    <div className="titfoter">
                      <h6 style={{color: '#fff'}}>Feature</h6>
                    </div>
                    <div className="contfoter">
                      <p>Live Chat</p>
                      <p>Profile</p>
                      <p>Management</p>
                      <p>Chat Bot</p>
                      <p>Co-Browsing</p>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="titfoter">
                      <h6 style={{color: '#fff'}}>Learn and Connect</h6>
                    </div>
                    <div className="contfoter">
                      <p>About</p>
                      <p>Contact</p>
                      <p>Integration</p>
                      <p>Help Docs</p>
                      <p>Security</p>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="titfoter">
                      <h6 style={{color: '#fff'}}>Resource</h6>
                    </div>
                    <div className="contfoter">
                      <p>Customer</p>
                      <p>Whitepaper</p>
                      <p>Dev API</p>
                      <p>Media Coverage</p>
                      <p>GDPR</p>
                    </div>
                  </div>
                  <div className="col-xl-3 d-flex justify-content-center text-center">
                    <a href="https://www.facebook.com" className="decornone"><span className="fa fa-facebook iconsos"></span></a>
                    <a href="https://www.linkedin.com" className="decornone"><span className="fa fa-linkedin iconsos"></span></a>
                    <a href="https://www.twitter.com" className="decornone"><span className="fa fa-twitter iconsos"></span></a>
                    <a href="https://plus.google.com" className="decornone"><span className="fa fa-google-plus iconsos"></span></a>
                    <a href="https://www.youtube.com" className="decornone"><span className="fa fa-youtube-play iconsos"></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fotbot">
              <div className="container">
                <div className="row">
                  <div className="col-xl-1">
                    <p className="contfotbot">Terms</p>
                  </div>
                  <div className="col-xl-1">
                    <p className="contfotbot">Privacy</p>
                  </div>
                  <div className="col-xl-2">
                    <p className="contfotbot">Cookie Policy</p>
                  </div>
                  <div className="col-xl-8 text-right">
                    <p className="contfotbot">Hello@communivatly.io</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Sign In</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        Modal body..
      </div>

      <div class="modal-footer">
        <button type="button" class="btnsignin btn btn-success">Sign In</button>
        <button type="button" class="btnclose btn btn-outline-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
      </div>
    );
  }
}

export default App;
