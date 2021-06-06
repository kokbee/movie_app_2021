import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    // data의 오브젝트가 뎁스가 길어서 상수로 받는값에 적용
    getMovies = async () => {
        const {
            data: {
              data: { movies }
            }
          } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
          );
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
      this.getMovies();
    }
    // 삼항 연산자를 사용해 렌더가 된 후 componentDidMount를 통해 값을 변경하여 출력 
    render () {
        const {isLoading, movies} = this.state;
        return (
            <section class="container">
                {isLoading ? (
                <div class="loader">
                    <span class="loader__text">Loading...</span>
                </div>
                ) :(
                <div class="movies">
                    {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}                    />
                    ))}
                </div>
                )}
            </section>
        );
    }
}

export default App;
