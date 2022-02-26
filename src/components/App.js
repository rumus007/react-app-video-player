import React from "react";
import youtube from "../repositories/youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./Video/VideoList";
import VideoDetail from "./Video/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSubmit = async (term) => {
    let results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: results.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
