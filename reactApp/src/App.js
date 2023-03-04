import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get('http://localhost:8080/api/coffeeController/test');
    console.log(movies.data.first)
    console.log(typeof(movies.data))
    //alert(movies.data.first)
  }
  componentDidMount() {
    // 영화 데이터 로딩!
    // setTimeout(()=> {
    //   this.setState({ isLoading: false});
    // }, 6000);
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
