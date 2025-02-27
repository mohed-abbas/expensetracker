import ExpenseWrapper from "./components/ExpenseWrapper";
import Navbar from "./components/Navbar";
import './assets/css/styles.css'

function App() {

  return (
    <>
      <div className="app w-10/12 mx-auto">
        <Navbar />
        <ExpenseWrapper />
      </div>
    </>
  )
}

export default App
