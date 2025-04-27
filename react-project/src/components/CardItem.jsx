import { Link } from "react-router-dom";

const CardItem = (props) => {
  const data = {
    columnId: props.columnId,
    cardId: props.cardId,
    header: props.header,
    task1Name: props.task1Name,
    task2Name: props.task2Name,
    classDisplay: props.classDisplay,
    statusClass: props.statusClass,
    img: props.img,
  };

  return (
    <div className="card">
      <Link to={{ pathname: "/card" }} state={data}>
        <div className="card-header">
          <h2>{props.header}</h2>
        </div>
        <div className="card-body">
          {props.task1Name && (
            <label className="switch">
              <input type="checkbox" />
              <span className="slider">
                <h2>{props.task1Name}</h2>
              </span>
            </label>
          )}

          {props.task2Name && (
            <label className="switch">
              <input type="checkbox" />
              <span className="slider">
                <h2>{props.task2Name}</h2>
              </span>
            </label>
          )}

          {props.img && (
            <div className="card-img-container">
              <img
                src={`https://betterplanning-server.onrender.com/${props.img}`}
                className="card-img"
              />
            </div>
          )}

          {props.additionalContent}

          {props.statusClass && props.classDisplay && (
            <div className={props.statusClass}>
              <h3>{props.classDisplay}</h3>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
