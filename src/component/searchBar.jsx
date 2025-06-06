import { useContext } from "react";
import { DispatchContext, SelectedFilterContext } from "../selectedFilter";

export default function SearchBar() {
  const selectedFilter = useContext(SelectedFilterContext);
  const filterValue = Object.values(selectedFilter);

  const list = filterValue.map((filter, index) => {
    if (Array.isArray(filter)) {
      const listArr = filter.map((item, i) => {
        return <SelectedFilter key={`item-${i}`} value={item} />;
      });
      return listArr;
    } else if (filter) {
      return <SelectedFilter key={index} value={filter} />;
    }
  });

  return (
    <>
      <div>
        <ul>{list}</ul>
        <button>Clear</button>
      </div>
    </>
  );
}

function SelectedFilter({ type, value }) {
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      <span>{value}</span>
      <button
        onClick={() => {
          dispatch({
            type: "remove",
            filterType: type,
            filterValue: value,
          });
        }}
      >
        X
      </button>
    </div>
  );
}
