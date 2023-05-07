import { Posts } from "./pages/Posts"
import Signup from "./pages/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
      <div className="min-h-screen max-w-screen overflow-x-hidden">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
