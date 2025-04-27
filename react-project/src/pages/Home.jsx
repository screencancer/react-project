import "./css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import AddDialogue from "../components/add-dialogue";

function Home() {
  //const [cards, setCards] = useState([]);
  const [showAddDialogue, setShowAddDialogue] = useState(false);
  const [columns, setColumns] = useState([]);
  const [selectedColumnId, setSelectedColumnId] = useState(null);

  const updateCard = (newCard) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        console.log(column, newCard);
        if (column.id === newCard.id) {
          console.log(column.id, "=", newCard.id);
          column.cards = newCard.cards;
          return column;
        }
        console.log(column, "New card ", newCard);
        return column;
      })
    );
  };

  const openAddDialogue = (title) => {
    setShowAddDialogue(true);
    setSelectedColumnId(title);
  };

  const closeAddDialogue = () => {
    setShowAddDialogue(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://betterplanning-server.onrender.com/api/columns");
        setColumns(
          response.data.map((column) => ({
            ...column,
            cards: column.cards || [],
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="home-page">
      <div id="content-section">
        <div id="content-columns">
          {columns.map((column) => (
            <div className="column" key={column.id}>
              {showAddDialogue && selectedColumnId === column.id && (
                <AddDialogue
                  closeAddDialogue={closeAddDialogue}
                  updateCard={updateCard}
                  columnId={column.id}
                />
              )}
              <div className="title">
                <h1>{column.title}</h1>
              </div>
              {column.cards.map((card) => (
                <CardItem
                  key={card.id}
                  columnId={column.id}
                  cardId={card.id}
                  header={card.header}
                  task1Name={card.task1Name}
                  task2Name={card.task2Name}
                  statusClass={card.statusClass}
                  classDisplay={card.classDisplay}
                  img={card.img}
                  additionalContent={
                    card.embeddedContent && (
                      <div className="embeded-content">
                        <iframe
                          src={card.embeddedContent.src}
                          title="YouTube video player"
                          frameBorder="0"
                          allow={card.embeddedContent.allow}
                          referrerPolicy={card.embeddedContent.referrerPolicy}
                          allowFullScreen
                          className={card.embeddedContent.className}
                        ></iframe>
                      </div>
                    )
                  }
                />
              ))}
              <button
                className="plus"
                onClick={() => {
                  openAddDialogue(column.id);
                }}
              >
                +
              </button>
            </div>
          ))}
          <div className="column">
            <div className="title-empty"></div>
            <div className="empty-CardItem">
              <h3 className="plus" onClick={openAddDialogue}>
                +
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
