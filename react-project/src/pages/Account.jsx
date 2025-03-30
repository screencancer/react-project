import "./css/account.css";

function account() {
  return (
    <main className="account-page">
      <div id="content-section">
        <h1>Account</h1>
        <div id="accountItems">
          <div className="accountItem">
            <h3>Name:</h3>
            <input type="text" />
          </div>
          <div className="accountItem">
            <h3>Bio:</h3>
            <textarea rows="6" cols="50"></textarea>
          </div>
          <div className="accountItem">
            <h3>Logged In Devices:</h3>
            <ul id="devices">
              <li>
                <img src="" alt="" />
                Android xxxxx, SC
              </li>
              <li>
                <img src="" alt="" />
                Chrome xxxxx, CA
              </li>
            </ul>
          </div>
          <div className="accountItem">
            <h3>Plan Status:</h3>
            <p>Pro Member</p>
          </div>
          <div className="accountItem">
            <h3>Two-Factor Authentication</h3>
            <div className="toggle-container">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
              <span className="toggle-status">Enabled</span>
            </div>
          </div>
          <div className="accountItem">
            <h3>Change Subscription:</h3>
            <select name="language" id="language-picker">
              <option value="English">Free</option>
              <option value="Spanish">Pro</option>
            </select>
          </div>
          <div className="accountItem">
            <h3>Payment Method</h3>
            <button>
              <img src={`${process.env.PUBLIC_URL}/images/pay.png`} alt="" />
            </button>
          </div>
          <div className="accountItem">
            <h3>Download Account Data</h3>
            <button>
              <img
                src={`${process.env.PUBLIC_URL}/images/download.png`}
                alt=""
              />
            </button>
          </div>
          <div className="accountItem">
            <h3>View Profile Preview</h3>
            <button>View</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default account;
