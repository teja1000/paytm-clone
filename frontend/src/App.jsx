import { BrowserRouter, Route,Routes} from "react-router-dom"
import { Signup } from "./pages/Signup"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send" element={<Send/>}/>

    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
