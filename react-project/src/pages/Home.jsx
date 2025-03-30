import "./css/home.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <main className="home-page">
      <div id="content-section">
        <div id="content-columns">
          <div className="column">
            <div className="title">
              <h1>To Do</h1>
            </div>
            <div className="card">
              <Link to="/card">
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
              </Link>
            </div>
            <div className="card">
              <Link to="/card">
                <div className="card-header">
                  <h2>Create Y</h2>
                </div>
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/yFeature.png`}
                    alt=""
                  />
                  <h3 className="plus">+</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="title">
              <h1>In Progress</h1>
            </div>

            <div className="card">
              <Link to="/card">
                <div className="card-header">
                  <h2>Create X v.2</h2>
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
              </Link>
            </div>
            <div className="card">
              <Link to="/card">
                <div className="card-header">
                  <h2>Create Y</h2>
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
                  <div className="urgent">
                    <h3>Urgent</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link to="/card">
                <div className="card-header">
                  <h2>Create Z</h2>
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
                  <div className="embeded-content">
                    <iframe
                      src="https://www.youtube.com/embed/wDchsz8nmbo?si=rVIMruHPL_vWDH7R"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="videoplayer"
                    ></iframe>
                  </div>
                  <h3 className="plus">+</h3>
                  <div className="non-urgent">
                    <h3>Not Urgent</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="title">
              <h1>Done</h1>
            </div>
            <div className="card">
              <Link to="/card">
                <div className="card-header">
                  <h2>Create XYZ</h2>
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
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="title-empty"></div>
            <div className="empty-card">
              <Link to="/card">
                <h3 className="plus">+</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default home;
