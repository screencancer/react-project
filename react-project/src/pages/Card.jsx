import { useLocation } from "react-router-dom";
import "./css/card.css";
import { useState } from "react";
import EditDialogue from "../components/edit-dialogue";

function Card() {
  const [cards, setCards] = useState([]);
  const [showEditDialogue, setShowEditDialogue] = useState(false);
  const location = useLocation();
  const state = location.state || {};

  const {
    header = "Default Header",
    task1Name = "Default Task 1",
    task2Name = "Default Task 2",
    statusClass = "critical",
    classDisplay = "Critical",
  } = state;

  console.log("Received state:", state, "at location ", location);

  const updateCard = (card) => {
    setCards((cards) => [...cards, card]);
  };

  const openEditDialogue = () => {
    setShowEditDialogue(true);
  };

  const closeEditDialogue = () => {
    setShowEditDialogue(false);
  };

  return (
    <main id="card-main">
      <div className="card">
        {showEditDialogue ? (
          <EditDialogue
            closeEditDialog={closeEditDialogue}
            updateCard={updateCard}
            columnId={state.columnId}
            cardId={state.cardId}
          />
        ) : (
          ""
        )}

        <div className="card-header">
          <h2>{header}</h2>
        </div>
        <div className="card-body">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <h2>{task1Name}</h2>
            </span>
          </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <h2>{task2Name}</h2>
            </span>
          </label>
          <h3 className="plus">+</h3>
          <div className={statusClass}>
            <h3>{classDisplay}</h3>
          </div>
        </div>
        <div className="options">
          <button id="editbtn" onClick={openEditDialogue}>
            Edit
          </button>
          <button id="deletebtn">Delete</button>
        </div>
      </div>
    </main>
  );
}

export default Card;
