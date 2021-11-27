import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import EditExercise from "./pages/EditExercise";
import CreateExercise from "./pages/CreateExercise";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* Client-side Routing */}
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/EditExercise" element={<EditExercise />} />
                  <Route path="/CreateExercise" element={<CreateExercise />} />
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
