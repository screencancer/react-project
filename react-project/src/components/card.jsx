import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to="/card">
        <div className="card-header">
          <h2>{props.header}</h2>
        </div>
        <div className="card-body">
          {props.task1Name ? (
            <label className="switch">
              <input type="checkbox" />
              <span className="slider">
                <h2>{props.task1Name}</h2>
              </span>
            </label>
          ) : null}

          {props.task2Name ? (
            <label className="switch">
              <input type="checkbox" />
              <span className="slider">
                <h2>{props.task2Name}</h2>
              </span>
            </label>
          ) : null}
          {props.additionalContent ? props.additionalContent : null}
          <h3 className="plus">+</h3>
          {props.class && props.classDisplay && (
            <div className={props.class}>
              <h3>{props.classDisplay}</h3>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
