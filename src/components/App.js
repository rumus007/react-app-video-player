import React from "react";
import youtube from "../repositories/youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./Video/VideoList";
import VideoDetail from "./Video/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmit("Buildings");
  }

  onSubmit = async (term) => {
    let results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
