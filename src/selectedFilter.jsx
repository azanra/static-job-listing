import { createContext } from "react";

export const SelectedFilterContext = createContext(null);
export const DispatchContext = createContext(null);

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
  }
}
