import React from "react";
import youtube from "../repositories/youtube";
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
  onSubmit = async (term) => {
    console.log("from app>>", term);
    let results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log("results are>>>", results);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
