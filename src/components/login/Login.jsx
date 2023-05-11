import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <React.Fragment>
    <section className="tm-main-body-section">
    <section className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="text-center">Log In</h1>
        </div>
      </div>
    </section>
    <div className="tm-background-stripe-light">
      <section className="container">					  
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
            <div className="tm-margin-bottom-30">
              <div>Welcome back! Please choose your preferred way to log in.</div>
              <div>If you don't have an account, please <NavLink to="/registration">sign up here</NavLink>.</div>
            </div>
            <div className="tm-card-padded tm-padding-top-30 tm-padding-bottom-30">
              <form name="login" id="login" action="https://www.pilatesanytime.com/account/log_in.cfm" method="post" onsubmit="return _CF_checklogin(this)">
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <input name="email" type="email" maxLength={100} className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <input name="password" type="password" maxLength={100} className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block"><i className="far fa-solid fa-key" /> Log in with email and password</button>
                    </div>
                    <p>Forgot your password? You can <a href="forgot_pw.html">reset your password</a></p>
                  </div>
                </div>
                <input type="hidden" name="action" defaultValue="login" />
                <input type="hidden" name="refer_page" defaultValue="../index.html" />
              </form>
              <div className="row">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                  <div className="tm-horizontal-line-text"><span> OR </span></div>
                </div>
              </div>
              <form name="login" id="login" action="https://www.pilatesanytime.com/account/log_in.cfm" method="post" onsubmit="return _CF_checklogin(this)">
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <input name="email" type="email" maxLength={100} className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <button type="submit" className="btn btn-block btn-primary-light"><i className="far fa-solid fa-wand" /> Log in with a magic link</button>
                    </div>
                    <p>
                      We'll email you a magic link for a password-free log in
                    </p>
                  </div>
                </div>
                <input type="hidden" name="action" defaultValue="send_magic" />
                <input type="hidden" name="password" defaultValue="09D48CFB-B974-7CA4-FFFD5E5794B5248D" />
                <input type="hidden" name="refer_page" defaultValue="../index.html" />
              </form>
            </div> 
          </div> 
        </div> 
      </section>
    </div> 
    <div className="modal fade" id="diagnosticsModal" tabIndex={-1} role="dialog" aria-labelledby="diagnosticsModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="modal-title" id="diagnosticsModalLabel">Browser Cookie Check</h4>
          </div>
          <div className="modal-body">
            <div className="row text-center">
              <div className="col-xs-12">It looks like cookies are blocked in your browser.  Our site uses cookies to
                keep you logged in.  Please enable cookies before trying to log in.  For more help see our 
                <a href="../Pilates-Help/137/How-do-I-stay-logged-into-the-site.html">FAQ</a>
              </div>
            </div>
            <div className="tm-vertical-spacer" />
            <div className="row text-center">
              <div className="col-xs-12">It will help us resolve your login problems if you send diagnostics.  
                We only collect browser data related to your login.
              </div>
            </div>
            <div className="tm-vertical-spacer" />
            <div className="row text-center">
              <div className="col-xs-12 col-sm-6">
                <button data-dismiss="modal" className="btn btn-block btn-lg">Close</button>
              </div>
              <div className="col-xs-12 col-sm-6" id="send_message">
                <button className="btn btn-block btn-primary btn-lg" onclick="send_diagnostics()">Send Diagnostics</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}

export default Login