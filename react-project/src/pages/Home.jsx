import "./css/home.css";
import { Link } from "react-router-dom";
import Card from "../components/card";

function Home() {
  return (
    <main className="home-page">
      <div id="content-section">
        <div id="content-columns">
          <div className="column">
            <div className="title">
              <h1>To Do</h1>
            </div>
            <Card
              header="Create A"
              task1Name="testTask"
              task2Name="testTask2"
              class="critical"
              classDisplay="Critical"
            />
            <Card
              header="Do Z"
              task1Name="testTaskVeryUrgent"
              task2Name="testTask2"
              class="urgent"
              classDisplay="Urgent"
            />
            <Card header="Create Y" task1Name="Needs X" task2Name="Needs Y" />
          </div>
          <div className="column">
            <div className="title">
              <h1>In Progress</h1>
            </div>
            <Card
              header="Do Y"
              task1Name="testTaskVeryUrgent3"
              task2Name="testTask24234"
              class="urgent"
              classDisplay="Urgent"
            />
            <Card
              header="Create Y"
              task1Name="Needs X"
              task2Name="Needs Y"
              class="urgent"
              classDisplay="Urgent"
            />
            <Card
              header="Create Z"
              task1Name="Needs X"
              task2Name="Needs Y"
              class="non-urgent"
              classDisplay="Not Urgent"
              additionalContent={
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
              }
            />
          </div>
          <div className="column">
            <div className="title">
              <h1>Done</h1>
            </div>
            <Card
              header="Create XYZ"
              task1Name="Needs X"
              task2Name="Needs Y"
              class="critical"
              classDisplay="Critical"
            />
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

export default Home;
