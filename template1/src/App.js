import "./App.css";

function App() {
  return (
    <div>
      <section className="section">
        <div className="wrapper">
          <div className="left">
            <div className="navigation">
              <div class="fake-logo">(#) Logo</div>
            </div>
            <div className="form-wrapper w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="ms-form"
                data-wf-page-id="65fec2eb61e9120bf57b547e"
                data-wf-element-id="bd1c3578-4b1b-492c-89cb-40e4417858a9"
              >
                <h1 className="login-h1">Login</h1>
                <div className="form-field-wrap">
                  <label htmlFor="Email" className="field-label">
                    Your work email
                  </label>
                  <input
                    className="form-field w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="hi@example.com"
                    type="email"
                    id="Email"
                  />
                </div>
                <a
                  data-w-id="dd6424f5-f6c0-5386-cbe2-85c310d832ae"
                  href="#"
                  className="button w-button"
                >
                  Continue
                </a>
                <div style={{ display: "none" }} className="email-step-2">
                  <div className="form-field-wrap">
                    <label htmlFor="Password-3" className="field-label">
                      Password
                    </label>
                    <input
                      data-show="true"
                      className="form-field w-input"
                      maxLength={256}
                      name="Password-3"
                      data-name="Password 3"
                      placeholder="Enter your password"
                      type="password"
                      id="Password-3"
                      required
                    />
                    <div
                      data-current="Show"
                      data-easing="ease"
                      data-duration-in={300}
                      data-duration-out={100}
                      className="show-password-wrap w-tabs"
                    >
                      <div
                        id="transformButton"
                        data-transform="true"
                        className="w-tab-menu"
                      >
                        <a
                          data-w-tab="Show"
                          className="show-password w-inline-block w-tab-link w--current"
                        >
                          <div className="eye-svg w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 24 24"
                              height="16px"
                              viewBox="0 0 24 24"
                              width="16px"
                              fill="currentColor"
                            >
                              <rect fill="none" height={24} width={24} />
                              <path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" />
                            </svg>
                          </div>
                          <div>Hide</div>
                        </a>
                        <a
                          data-w-tab="Hide"
                          className="show-password w-inline-block w-tab-link"
                        >
                          <div className="eye-svg w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 24 24"
                              height="16px"
                              viewBox="0 0 24 24"
                              width="16px"
                              fill="currentColor"
                            >
                              <rect fill="none" height={24} width={24} />
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                          </div>
                          <div>Show</div>
                        </a>
                      </div>
                      <div className="hide w-tab-content">
                        <div
                          data-w-tab="Show"
                          className="w-tab-pane w--tab-active"
                        />
                        <div data-w-tab="Hide" className="w-tab-pane" />
                      </div>
                    </div>
                    <a
                      
                      href="/password/forgot"
                      className="forgot-pw"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button w-button"
                    defaultValue="Log In"
                  />
                </div>
                <div className="show-hide-code w-embed w-script"></div>
                <div className="form-divider">
                  <div className="form-div-line" />
                  <div>or</div>
                  <div className="form-div-line" />
                </div>
                <div>
                  <a
                    href="#"
                    className="social-btn google w-inline-block"
                  >
                    <div className="social-content">
                      <img
                        src="/google.svg"
                        loading="lazy"
                        alt
                        className="social-image"
                      />
                      <div
                        
                        className="social-text"
                      >
                        Continue with Google
                      </div>
                      <div
                        
                        className="disconnect-link"
                      >
                        <img
                          src="https://assets-global.website-files.com/632c941ea9199f8985f3fd52/6331f8b4b515a6328c67f9ec_close_black_24dp.svg"
                          loading="lazy"
                          alt
                          className="disconnect-image"
                        />
                      </div>
                    </div>
                  </a>
                  <a
                    
                    href="#"
                    className="social-btn w-inline-block"
                  >
                    <div className="social-content">
                      <img
                        src="/linkedin.svg"
                        loading="lazy"
                        alt
                        className="social-image"
                      />
                      <div
                        
                        className="social-text"
                      >
                        Continue with LinkedIn
                      </div>
                      <div
                        
                        className="disconnect-link"
                      >
                        <img
                          src="/close_black_24dp.svg"
                          loading="lazy"
                          alt
                          className="disconnect-image"
                        />
                      </div>
                    </div>
                  </a>
                  <a
                    
                    href="#"
                    className="social-btn github w-inline-block"
                  >
                    <div className="social-content">
                      <img
                        src="/github.svg"
                        loading="lazy"
                        alt
                        className="social-image"
                      />
                      <div
                        
                        className="social-text"
                      >
                        Continue with GitHub
                      </div>
                      <div
                        
                        className="disconnect-link"
                      >
                        <img
                          src="https://assets-global.website-files.com/632c941ea9199f8985f3fd52/6331f8b4b515a6328c67f9ec_close_black_24dp.svg"
                          loading="lazy"
                          alt
                          className="disconnect-image"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="login-footer">
              <p className="p-14 align-center">
                No Account?{" "}
                <a href="create-an-account.html" className="link">
                  Sign up free
                </a>
              </p>
              <div className="flex-row-outer">
                <a href="#" className="login-footer-link">
                  Privacy
                </a>
                <a href="#" className="login-footer-link">
                  Terms
                </a>
                <a href="#" className="login-footer-link">
                  Support
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-wrap">
              <div className="right-text-wrap">
              <div class="fake-logo">(#) Logo</div>

                <h2 className="case-study-text">
                Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
                </h2>
                <a href="#" className="button white w-button">
                  Button Text
                </a>
              </div>
              <div className="right-image" />
            </div>
          </div>
          <div className="right spacer" />
        </div>
        <img
          src="/Screen-Shot-2022-11-18-at-2.05.22-PM.jpg"
          loading="lazy"
          sizes="100vw"
          srcSet="/Screen-Shot-2022-11-18-at-2.05.22-PM-p-500.jpg 500w, /Screen-Shot-2022-11-18-at-2.05.22-PM-p-800.jpg 800w, /Screen-Shot-2022-11-18-at-2.05.22-PM-p-1080.jpg 1080w, /Screen-Shot-2022-11-18-at-2.05.22-PM-p-1600.jpg 1600w, /Screen-Shot-2022-11-18-at-2.05.22-PM-p-2000.jpg 2000w, /Screen-Shot-2022-11-18-at-2.05.22-PM.jpg 2070w"
          alt
          className="bg"
        />
      </section>
      <div>
        <div
          data-w-id="cd945814-aa57-a7ef-3853-7bab5d0f0a62"
          className="widget-wrapper"
        >
          <a
            data-w-id="cd945814-aa57-a7ef-3853-7bab5d0f0a65"
            href="#"
            className="widget-move right-move w-inline-block"
          >
            <div className="widget-svg-small w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 24 24"
                width="1000px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <g>
                    <polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59">
                      <polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"></polygon>
                    </polygon>
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <a
            data-w-id="cd945814-aa57-a7ef-3853-7bab5d0f0a67"
            href="#"
            className="widget-move left-move w-inline-block"
          >
            <div className="widget-svg-small w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 24 24"
                width="1000px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <g>
                    <polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59">
                      <polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"></polygon>
                    </polygon>
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <a
            data-w-id="cd945814-aa57-a7ef-3853-7bab5d0f0a69"
            href="#"
            className="widget-move down w-inline-block"
          >
            <div className="widget-svg-small w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 24 24"
                width="1000px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <g>
                    <polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59">
                      <polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"></polygon>
                    </polygon>
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <a
            data-w-id="cd945814-aa57-a7ef-3853-7bab5d0f0a6b"
            href="#"
            className="widget-move w-inline-block"
          >
            <div className="widget-svg-small w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 24 24"
                width="1000px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <g>
                    <polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59">
                      <polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"></polygon>
                    </polygon>
                  </g>
                </g>
              </svg>
            </div>
          </a>
         
         
        </div>
       
      </div>

    </div>
  );
}

export default App;
