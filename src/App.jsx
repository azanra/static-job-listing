import "./App.css";
import Header from "./component/header.jsx";
import JobList from "./component/jobList.jsx";
import SearchBar from "./component/searchBar.jsx";
import { SelectedFilterProvider } from "./selectedFilter.jsx";

function App() {
  return (
    <div>
      <SelectedFilterProvider>
        <Header>
          <SearchBar />
        </Header>
        <JobList />
      </SelectedFilterProvider>
    </div>
  );
}

export default App;
