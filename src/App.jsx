import "./App.css";
import Header from "./component/header.jsx";
import Job from "./component/job.jsx";
import SearchBar from "./component/searchBar.jsx";
import { data } from "./data.js";
import { SelectedFilterProvider } from "./selectedFilter.jsx";

function App() {
  const jobs = data;
  return (
    <>
      <SelectedFilterProvider>
        <Header>
          <SearchBar />
          {jobs &&
            jobs.map((item) => {
              return <Job key={item.id} info={item} />;
            })}
        </Header>
      </SelectedFilterProvider>
    </>
  );
}

export default App;
