import "./css/recent.css";

function recent(){
    return(
        <main className="recent-page">
      <div id="content-section">
        <a href="../home/index.html">
            <h3>Sample Board</h3>
        <section className="recent-page-section">
          <div id="recent-content">
            <img src="../images/cardsrecent.png" alt="" />
            <div id="preview">
              <h1>Preview</h1>
              <h2>6 cards</h2>
              <h2>3 categories</h2>
              <h2>10% done</h2>
              <h2>Last Modified 2/16/2025</h2>
            </div>
          </div>
        </section>
        </a>
        
      </div>
    </main>
        );
};

export default recent;