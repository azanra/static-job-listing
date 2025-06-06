export function selectedFilterReducer(selectedFilter, action) {
  switch (action.type) {
    case "set":
      if (action.type === "language" || action.type === "tools") {
        const updatedTask = JSON.parse(JSON.stringify(selectedFilter));
        updatedTask[action.type].push(action.value);
        action.value = updatedTask;
      }
      return {
        ...selectedFilter,
        [action.type]: action.value,
      };
  }
}
