export default function Filter({ info }) {
  const { role, level, languages, tools } = info;
  return (
    <>
      <div>
        {role && <FilterButton filter={role} />}
        {level && <FilterButton filter={level} />}
        {languages.length > 0 &&
          languages.map((item, index) => {
            return <FilterButton key={`language-${index}`} filter={item} />;
          })}
        {tools.length > 0 &&
          tools.map((item, index) => {
            return <FilterButton key={`tools-${index}`} filter={item} />;
          })}
      </div>
    </>
  );
}

function FilterButton({ filter }) {
  return (
    <>
      <button>{filter}</button>
    </>
  );
}
