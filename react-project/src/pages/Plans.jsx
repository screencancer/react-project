import "./css/plans.css";
import Board from "../components/board";

function plans() {
  return (
    <main className="plans-page">
      <div id="content-section">
        <div id="plans">
          <div id="plan-row">
            <Board
              key={1}
              imageSource="/images/Cards.png"
              title="Sample Board"
              numCards={6}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/16/2025"
            />
            <Board
              key={2}
              imageSource="/images/Cards.png"
              title="Sample Board 2"
              numCards={7}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/8/2025"
            />
            <Board
              key={3}
              imageSource="/images/Cards.png"
              title="Sample Board 3"
              numCards={6}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/16/2025"
            />
            <Board
              key={4}
              imageSource="/images/Cards.png"
              title="Sample Board 4"
              numCards={7}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/8/2025"
            />
            <Board
              key={5}
              imageSource="/images/Cards.png"
              title="Sample Board 5"
              numCards={6}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/16/2025"
            />
            <Board
              key={6}
              imageSource="/images/Cards.png"
              title="Sample Board 6"
              numCards={7}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/8/2025"
            />
            <Board
              key={7}
              imageSource="/images/Cards.png"
              title="Sample Board 7"
              numCards={6}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/16/2025"
            />
            <Board
              key={8}
              imageSource="/images/Cards.png"
              title="JSON Name"
              numCards={7}
              numCategories={3}
              percentDone="10%"
              modifiedDate="2/8/2025"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default plans;
