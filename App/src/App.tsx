import { Routes, Route } from "react-router-dom";
import { PersonalInfoForm, Home, PlanForm, AddOns, Summary, ThankYou } from "./layout/layout"

function App() {

  return (
    <div className="bg-Magnolia w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PersonalInfoForm />} />
          <Route path="select-plan" element={<PlanForm />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
