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
        "https://betterplanning-server.onrender.com/api/boards"
        //"http://localhost:3000/api/boards/"
      );
      setBoards(response.data);
    })();
  }, []);
  return (
    <main className="plans-page">
      <div id="content-section">
        <div id="plans">
          <div id="plan-row">
            {boards.map((boardData) => (
              <Board
                key={boardData.id}
                imageSource={boardData.image_source}
                title={boardData.title}
                numCards={boardData.num_cards}
                numCategories={boardData.num_categories}
                percentDone={boardData.percent_done}
                modifiedDate={boardData.modified_date}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoardPlan;
