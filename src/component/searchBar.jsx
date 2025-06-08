import { useContext } from "react";
import { DispatchContext, SelectedFilterContext } from "../selectedFilter";

export default function SearchBar() {
  const selectedFilter = useContext(SelectedFilterContext);
  const dispatch = useContext(DispatchContext);
  const { role, level, languages, tools } = selectedFilter;
  return (
    <>
      <div className="flex w-[70%] gap-4">
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
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        Clear
      </button>
    </>
  );
}

function SelectedFilter({ type, value }) {
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      <span>{value} </span>
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
