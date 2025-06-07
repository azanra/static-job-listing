import { createContext, useReducer } from "react";
import { initialFilter } from "./data.js";

export const SelectedFilterContext = createContext(null);
export const DispatchContext = createContext(null);

export function SelectedFilterProvider({ children }) {
  const [selectedFilter, dispatch] = useReducer(
    selectedFilterReducer,
    initialFilter
  );
  return (
    <SelectedFilterContext.Provider value={selectedFilter}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </SelectedFilterContext.Provider>
  );
}

export function selectedFilterReducer(selectedFilter, action) {
  switch (action.type) {
    case "set":
      if (action.filterType === "languages" || action.filterType === "tools") {
        const updatedFilter = JSON.parse(JSON.stringify(selectedFilter));

        updatedFilter[action.filterType].includes(action.filterValue) ===
          false && updatedFilter[action.filterType].push(action.filterValue);

        return updatedFilter;
      } else {
        return {
          ...selectedFilter,
          [action.filterType]: action.filterValue,
        };
      }
    case "remove":
      if (action.filterType === "languages" || action.filterType === "tools") {
        const updatedFilter = JSON.parse(JSON.stringify(selectedFilter));
        const removedFilter = updatedFilter[action.filterType].filter(
          (item) => {
            return item !== action.filterValue;
          }
        );
        return {
          ...selectedFilter,
          [action.filterType]: removedFilter,
        };
      } else {
        return {
          ...selectedFilter,
          [action.filterType]: null,
        };
      }
    case "reset":
      return initialFilter;
    default:
      throw new Error("Unknown Action Type ", action.type);
  }
}
