const Board = (props) => {
  const srcImg = `https://betterplanning-server.onrender.com/${props.imageSource}`;
  return (
    <div className="plan">
      <div className="card">
        <img src={srcImg} alt={props.title} />
        <div className="inner-card">
          <h3>{props.numCards} Cards</h3>
          <h3>{props.numCategories} Categories</h3>
          <h3>{props.percentDone} Done</h3>
          <h3>Last Modified {props.modifiedDate}</h3>
        </div>
      </div>
      <h3 className="board-title">{props.title}</h3>
    </div>
  );
};

export default Board;
