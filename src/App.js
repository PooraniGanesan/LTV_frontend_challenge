import React from "react";
import HomePage from "./components/HomePage";
import CreateShortUrl from "./components/CreateShortUrl"

function App() {
  return (
    <div>
      <h1>URL Shortener</h1>
      <CreateShortUrl/>
      <HomePage />
    </div>
  );
}

export default App;
