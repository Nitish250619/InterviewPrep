// src/Routing.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LandingPage from "../LandingPage/LandingPage";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoutes";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import QuizApp from "../QuizApp/QuizApp";
import QuizPage from "../QuizApp/QuizPage/QuizPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/landingpage"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizes"
          element={
            <ProtectedRoute>
              <QuizApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:topic/:difficulty/:quizIndex"
          element={
            <ProtectedRoute>
              <QuizPage/>
            </ProtectedRoute>
          }
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
};

export default Routing;
