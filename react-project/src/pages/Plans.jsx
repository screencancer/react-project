import "./css/plans.css";
import Board from "../components/board";
import axios from "axios";
import { useEffect, useState } from "react";

// "_id": 1,
//     "image_source": "images/Cards.png",
//     "title": "Sample Board",
//     "num_cards": 6,
//     "num_categories": 3,
//     "percent_done": "10%",
//     "modified_date": "2/16/2025"

const BoardPlan = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://betterplanning-server.onrender.com/api/cakes"
        //"https://housing-backend-oubs.onrender.com/api/houses/"
      );
      setBoards(response.data);
    })();
  }, []);
  return (
    <main className="plans-page">
      <div id="content-section">
        <div id="plans">
          <div id="plan-row">
{boards.map((props) => (
  <Board
    key={props.id}
    imageSource={props.image_source}
    title={props.title}
    numCards={props.num_cards}
    numCategories={props.num_categories}
    percentDone={props.percent_done}
    modifiedDate={props.modified_date}
  />
))}
</div>
        </div>
      </div>
    </main>
  );
};

export default BoardPlan;
