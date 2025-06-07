import { useContext } from "react";
import { DispatchContext, SelectedFilterContext } from "../selectedFilter";

export default function SearchBar() {
  const selectedFilter = useContext(SelectedFilterContext);
  const { role, level, languages, tools } = selectedFilter;
  return (
    <>
      <div>
        {role && <SelectedFilter type="role" value={role} />}
        {level && <SelectedFilter type="level" value={level} />}
        {languages.length > 0 &&
          languages.map((item, index) => {
            return (
              <SelectedFilter
                key={`languagesSeach-${index}`}
                type="languages"
                value={item}
              />
            );
          })}
        {tools.length > 0 &&
          tools.map((item, index) => {
            return (
              <SelectedFilter
                key={`toolsSearch-${index}`}
                type="tools"
                value={item}
              />
            );
          })}
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
