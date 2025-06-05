export default function SearchBar({ selectedFilter }) {
  const filterValue = Object.values(selectedFilter);

  const list = filterValue.map((filter, index) => {
    if (Array.isArray(filter)) {
      const listArr = filter.map((item, i) => {
        return <SelectedFilter key={`item-${i}`} filter={item} />;
      });
      return listArr;
    } else if (filter) {
      return <SelectedFilter key={index} filter={filter} />;
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

function SelectedFilter({ filter }) {
  return (
    <div>
      {filter} <button>X</button>
    </div>
  );
}
