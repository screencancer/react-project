import "./css/settings.css";

function settings() {
  return (
    <main className="settings-page">
      <div id="content-section">
        <h1>Settings</h1>
        <div className="settings">
          <div className="setting">
            <h3>Email: xxxxx@gmail.com</h3>
          </div>
          <div className="setting">
            <h3>Username: xxxxx2</h3>
          </div>
          <div className="setting">
            <h3>Reset Password</h3>
            <button>Reset Password</button>
          </div>
          <div className="setting">
            <h3>Light Mode:</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting">
            <h3>Avatar:</h3>
            <button>Choose File</button>
            <h5>No file chosen</h5>
          </div>
          <div className="setting">
            <h3>Language:</h3>
            <select name="language" id="language-picker">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div className="setting" id="socials">
            <h3>Connect Socials: </h3>
            <div className="social-connections">
              <button>
                <i className="fab fa-google"></i> Connect Google
              </button>
              <button>
                <i className="fab fa-microsoft"></i> Connect Microsoft
              </button>
              <button>
                <i className="fab fa-facebook"></i> Connect Facebook
              </button>
              <button>
                <i className="fab fa-twitter"></i> Connect Twitter
              </button>
              <button>
                <i className="fab fa-github"></i> Connect GitHub
              </button>
            </div>
          </div>
          <div className="setting" id="socials">
            <h3>Currently Linked Socials </h3>
            <div className="social-connections">
              <p>
                <i className="fab fa-google"></i> Connected Google
              </p>
              <p>
                <i className="fab fa-twitter"></i> Connected Twitter
              </p>
              <p>
                <i className="fab fa-github"></i> Connected GitHub
              </p>
            </div>
          </div>
          <div className="setting">
            <form method="POST" id="form" />

            <h3>Contact us!</h3>
            <input
              type="hidden"
              name="access_key"
              value="4554bff3-196d-40c0-85e6-f92ca5983fe1"
            />

            <span className="contact-field">
              <title>Name</title>
              <input type="text" name="name" placeholder="Name" required />
            </span>

            <span className="contact-field">
              <title>Email</title>
              <input
                type="text"
                name="name"
                placeholder="example@email.com"
                required
              />
            </span>

            <span className="contact-field">
              <title>Message</title>
              <textarea
                name="message"
                placeholder="Message goes here"
                required
              ></textarea>
            </span>

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <button type="submit">Submit Form</button>

            <div id="result"></div>

            <form />
          </div>
        </div>
      </div>
    </main>
  );
}

export default settings;
