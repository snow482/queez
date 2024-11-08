
import Nav from './components/Nav'
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <Nav/>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default App
