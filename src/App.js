import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async () => {
      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    };
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 6000);
      this.getMovies();
    }
    // 삼항 연산자를 사용해 렌더가 된 후 componentDidMount를 통해 값을 변경하여 출력 
    render () {
        const {isLoading} = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : "We are ready"}
            </div>
        );
    }
}

export default App;
