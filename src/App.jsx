import "./App.css";
import Header from "./component/header.jsx";
import SearchBar from "./component/searchBar.jsx";

function App() {
  const selectedFilter = {
    role: "Frontend",
    level: null,
    language: ["CSS", "Javascript"],
    tools: [],
  };
  return (
    <>
      <Header>
        <SearchBar selectedFilter={selectedFilter} />
      </Header>
    </>
  );
}

export default App;
