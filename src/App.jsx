import "./App.css";
import Header from "./component/header.jsx";
import Job from "./component/job.jsx";
import SearchBar from "./component/searchBar.jsx";
import { data } from "./data.js";

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
        {data.map((item) => {
          return <Job key={item.id} info={item} />;
        })}
      </Header>
    </>
  );
}

export default App;
