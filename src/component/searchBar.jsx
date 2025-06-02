export default function SearchBar({ selectedFilter }) {
  let filter = [];
  for (const key in selectedFilter) {
    if (Array.isArray(selectedFilter[key])) {
      selectedFilter[key].map((item) => {
        filter.push(item);
      });
    } else {
      filter.push(selectedFilter[key]);
    }
  }
  return (
    <>
      <div>
        <ul>
          {filter.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
