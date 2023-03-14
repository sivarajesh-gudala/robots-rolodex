import { Component } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchText } = this.state;
    const filteredRobots = robots.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredRobots);
    return (
      <div className="main-container">
        <SearchBox
          placeholder="Search Robots ..."
          handleChangeEvt={(e) => this.setState({ searchText: e.target.value })}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
