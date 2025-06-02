import "./App.css";
import Header from "./component/header.jsx";
import SearchBar from "./component/searchBar.jsx";

function App() {
  const selectedFilter = {
    role: "Frontend",
    language: ["CSS", "Javascript"],
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
