import './App.css';
import './navBar.css'
import NavBar from "./navBar"
import ItemListContainer from "./ItemListContainer"


function App() {
  return (
    <body>
      <header>
        <NavBar className="navegation"/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </body>
  );
}

export default App;
