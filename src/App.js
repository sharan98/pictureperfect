import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

import MovieGrid from "./components/MovieGrid";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        {t("WebsiteName")}
        <MovieGrid />
      </div>
    </Router>
  );
}

export default App;
