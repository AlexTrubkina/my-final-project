import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Resourses from "./pages/resourses";
import Home from "./pages/home";
import Tasks from "./pages/tasks/tasks";
import Templates from "./pages/templates";
import Theory from "./pages/theory";
import First from "./pages/tasks/first_task";
import Second from "./pages/tasks/second_task";
import Third from "./pages/tasks/third_task";
import Forth from "./pages/tasks/forth_task";
import Docs from "./pages/tasks/docs";
import InputQuiz from "./pages/quizes/input_quiz"
import Navigation from "./layout/Nav"
import Fifth from "./pages/tasks/fifth_task"


function App() {
  return (
    <div>
    <div className = 'body'>
      <Router>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/theory" element={<Theory/>} />
            <Route exact path="/tasks" element={<Tasks/>} />
            <Route path="first_task" element={<First />} />
            <Route path="second_task" element={<Second />} />
            <Route path="third_task" element={<Third />} />
            <Route path="forth_task" element={<Forth />} />
            <Route path="fifth_task" element={<Fifth />} />
            <Route path="docs" element={<Docs />} />
            <Route exact path="/resourses" element={<Resourses/>} />
            <Route exact path="/templates" element={<Templates/>} />
            <Route exact path="/first_test" element={<InputQuiz/>} />
          </Routes>
      </Router>
      </div>
    </div>
  )
}

export default App;
