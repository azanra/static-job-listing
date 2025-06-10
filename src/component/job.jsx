import Filter from "./filter.jsx";
import Image from "./image.jsx";
import Info from "./info.jsx";

export default function Job({ info }) {
  return (
    <div className="flex center mb-8">
      <div className="flex w-[80%] shadowBox rounded-xl px-8 py-4 gap-4">
        <Image url={info.logo} />
        <Info detailedInfo={info} />
        <Filter info={info} />
      </div>
    </div>
  );
}
