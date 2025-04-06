import React, {useState} from 'react'; 
import "./css/settings.css";

function Settings() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4554bff3-196d-40c0-85e6-f92ca5983fe1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
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
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required/>
          <input type="email" name="email" required/>
          <textarea name="message" required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Settings;
