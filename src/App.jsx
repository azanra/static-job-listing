import "./App.css";
import Header from "./component/header.jsx";
import JobList from "./component/jobList.jsx";
import SearchBar from "./component/searchBar.jsx";
import { SelectedFilterProvider } from "./selectedFilter.jsx";

function App() {
  return (
    <>
      <SelectedFilterProvider>
        <Header>
          <SearchBar />
          <JobList />
        </Header>
      </SelectedFilterProvider>
    </>
  );
}

export default App;
