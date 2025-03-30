import "./css/card.css";

function card() {
  return (
    <main id="card-main">
      <div className="card">
        <div className="card-header">
          <h2>Create X</h2>
        </div>
        <div className="card-body">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <h2>Needs X</h2>
            </span>
          </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <h2>Needs Y</h2>
            </span>
          </label>
          <h3 className="plus">+</h3>
          <div className="critical">
            <h3>Critical</h3>
          </div>
        </div>
        <div className="options">
          <button id="editbtn">Edit</button>
          <button id="deletebtn">Delete</button>
        </div>
      </div>
    </main>
  );
}

export default card;
