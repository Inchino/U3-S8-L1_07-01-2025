import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Chi vincerà il campionato?</p>
      <ButtonComponent squad="Napoli" />
      <br/>
      <ImageComponent img="\public\neres_david_napoli_7.jpg" alt="Esultanza Neres" />
      <br/>
      <ButtonComponent squad="Inter" />
      <br/>
      <ImageComponent img="\public\inter_supercoppa.jpeg" alt="Inter in Supercoppa" />
      <br/>
      <ButtonComponent squad="Atalanta" />
      <br/>
      <ImageComponent img="\public\Gasp.jpeg" alt="Gasperini" />
    </>
  );
}

export default App;
