import { useReducer } from "react";
import "./App.css";
import Header from "./component/header.jsx";
import Job from "./component/job.jsx";
import SearchBar from "./component/searchBar.jsx";
import { data, initialFilter } from "./data.js";

function App() {
  const selectedFilter = {
    role: "Frontend",
    level: null,
    language: ["CSS", "Javascript"],
    tools: [],
  };
  const [selectedFilter, dispatch] = useReducer(
    selectedFilterReducer,
    initialFilter
  );
  const jobs = data;
  return (
    <>
      <Header>
        <SearchBar selectedFilter={selectedFilter} />
        {jobs &&
          jobs.map((item) => {
            return <Job key={item.id} info={item} />;
          })}
      </Header>
    </>
  );
}

export default App;
