import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import EditExercise from "./pages/EditExercise";
import CreateExercise from "./pages/CreateExercise";


function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState([])
    return (
    <div className="App">
      <header className="App-header">
          {/* Client-side Routing */}
          <BrowserRouter>
              <Routes>
                  <Route path="/" exact
                         element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}
                  />
                  <Route path="/EditExercise"
                         element={<EditExercise exerciseToEdit={exerciseToEdit}/>}
                  />
                  <Route path="/CreateExercise" element={<CreateExercise />} />
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
