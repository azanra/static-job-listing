import { useContext } from "react";
import { DispatchContext, SelectedFilterContext } from "../selectedFilter";

export default function SearchBar() {
  const selectedFilter = useContext(SelectedFilterContext);
  const dispatch = useContext(DispatchContext);
  const { role, level, languages, tools } = selectedFilter;
  return (
    <div className="bg-white w-[80%] flex justify-between p-4 rounded-md px-12 relative top-20 shadowBox">
      <div className="flex gap-6">
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
        className="text-(--Dark-Grayish-Cyan) font-bold hover:text-(---Desaturated-Dark-Cyan) cursor-pointer hover:underline"
      >
        Clear
      </button>
    </div>
  );
}

function SelectedFilter({ type, value }) {
  const dispatch = useContext(DispatchContext);
  return (
    <div className="bg-(--Light-Grayish-Cyan) rounded-md">
      <span className="text-(---Desaturated-Dark-Cyan) font-bold mr-2 ml-2">
        {value}{" "}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: "remove",
            filterType: type,
            filterValue: value,
          });
        }}
        className="bg-(---Desaturated-Dark-Cyan) text-white text-2xl px-2 rounded-xs cursor-pointer hover:bg-black font-bold"
      >
        x
      </button>
    </div>
  );
}
