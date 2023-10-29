import "./App.css";
import React, { useState } from "react";
import { LoginSvg, CloseEyeSvg, OpenEyeSvg } from "./images";

function App() {
  const [passhow, setPassShow] = useState(false);
  return (
    <div className="App">
      <div className="app_inner_container">
        <div className="login_svg_container">
          <LoginSvg />
        </div>

        <div className="login_form_container">
          <p className="form_heading">Login</p>

          <form action="">
            <div className="email_input_container">
              <label htmlFor="email">Login ID</label>
              <input type="email" id="email" placeholder="Enter login ID" />
            </div>
            <div className="password_input_container">
              <label htmlFor="password">Password</label>
              <div className="eye_img_container">
                <input
                  type={!passhow ? "password" : "text"}
                  id="password"
                  placeholder="Enter Password"
                />
                <div onClick={() => setPassShow(!passhow)}>
                  {!passhow ? <OpenEyeSvg /> : <CloseEyeSvg />}
                </div>
              </div>
            </div>
            <div className="change_password_container">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                Remember me
              </label>
              <a href="/">Change Password</a>
            </div>
            <label htmlFor="terms" className="terms_label">
              <input type="checkbox" id="terms" />
              Agree To <a href="/">Terms and Conditions</a>
            </label>
            <button className="login_button">Login</button>
          </form>

          <div className="register_link_container">
            <p>Don't have an account...?</p>
            {/* <Link to="/">Register Here</Link> */}
            <a href="/">Register Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
