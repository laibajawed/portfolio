import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="homecard">
        <div className="homeh1">
          <h1>Welcome to my portfolio</h1>
          <h2>
            This website serves as an all-in-one platform for displaying all my
            projects.
          </h2>
        </div>
      </div>

      <div className="card-section">
        <div className="cards">
          <h2>Project:</h2>
          <p>This project is an Youtube clone.</p>
          <a href="https://youtube-ui-lemon.vercel.app/">
            <button>Visit</button>
          </a>
        </div>
        <div className="cards">
          <h2>Project:</h2>
          <p>This project is an Amazon clone</p>
          <a href="https://amazon-clone-opal-seven.vercel.app/">
            <button>Visit</button>
          </a>
        </div>
        <div className="cards">
          <h2>Project:</h2>
          <p>This project is the static resume i created.</p>
          <a href="https://milestone2bylaiba.vercel.app/">
            <button>Visit</button>
          </a>
        </div>
        <div className="cards">
          <h2>Project:</h2>
          <p>This project is the dynamic resume i created.</p>
          <a href="https://laibasdynamicresume.vercel.app/">
            <button>Visit</button>
          </a>
        </div>
      </div>
    </div>


  );
}
