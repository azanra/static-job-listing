import { useContext } from "react";
import { DispatchContext, SelectedFilterContext } from "../selectedFilter.jsx";

export default function Filter({ info }) {
  const { role, level, languages, tools } = info;
  return (
    <>
      <div>
        {role && <FilterButton value={role} type="role" />}
        {level && <FilterButton value={level} type="level" />}
        {languages.length > 0 &&
          languages.map((item, index) => {
            return (
              <FilterButton
                key={`languageFilter-${index}`}
                value={item}
                type="languages"
              />
            );
          })}
        {tools.length > 0 &&
          tools.map((item, index) => {
            return (
              <FilterButton
                key={`toolsFilter-${index}`}
                value={item}
                type="tools"
              />
            );
          })}
      </div>
    </>
  );
}

function FilterButton({ type, value }) {
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "set",
            filterType: type,
            filterValue: value,
          });
        }}
      >
        {value}
      </button>
    </>
  );
}
