export default function SearchBar({ selectedFilter }) {
  const filterValue = Object.values(selectedFilter);
  console.log(filterValue);
  const list = filterValue.map((filter, index) => {
    if (Array.isArray(filter)) {
      const listArr = filter.map((item, i) => {
        return <li key={`item-${i}`}>{item}</li>;
      });
      return listArr;
    } else if (filter) {
      return <li key={index}>{filter}</li>;
    }
  });
  return (
    <>
      <div>
        <ul>{list}</ul>
      </div>
    </>
  );
}
