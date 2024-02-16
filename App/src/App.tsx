import { Routes, Route } from "react-router-dom";
import { PersonalInfoForm, Home } from "./layout/layout"

function App() {

  return (
    <div className="bg-Magnolia w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PersonalInfoForm />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
