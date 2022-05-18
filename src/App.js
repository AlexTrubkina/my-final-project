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
import Firstt from "./pages/theory/first_theory";
import Secondt from "./pages/theory/second_theory";
import Thirdt from "./pages/theory/third_theory";
import Fortht from "./pages/theory/forth_theory";
import First from "./pages/tasks/first_task";
import Second from "./pages/tasks/second_task";
import Third from "./pages/tasks/third_task";
import Forth from "./pages/tasks/forth_task";
import Docs from "./pages/tasks/docs";
import InputQuiz from "./pages/quizes/input_quiz"
import InputQuizSecond from "./pages/quizes/input_quiz_2"
import InputQuizThird from "./pages/quizes/input_quiz_3"
import InputQuizForth from "./pages/quizes/input_quiz_4"
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
            <Route exact path="/tasks" element={<Tasks/>} />
            <Route path="first_theory" element={<Firstt />} />
            <Route path="second_theory" element={<Secondt />} />
            <Route path="third_theory" element={<Thirdt />} />
            <Route path="forth_theory" element={<Fortht />} />
            <Route path="first_task" element={<First />} />
            <Route path="second_task" element={<Second />} />
            <Route path="third_task" element={<Third />} />
            <Route path="forth_task" element={<Forth />} />
            <Route path="fifth_task" element={<Fifth />} />
            <Route path="docs" element={<Docs />} />
            <Route exact path="/resourses" element={<Resourses/>} />
            <Route exact path="/templates" element={<Templates/>} />
            <Route exact path="/first_test" element={<InputQuiz/>} />
            <Route exact path="/second_test" element={<InputQuizSecond/>} />
            <Route exact path="/third_test" element={<InputQuizThird/>} />
            <Route exact path="/forth_test" element={<InputQuizForth/>} />
          </Routes>
      </Router>
      </div>
    </div>
  )
}

export default App;
