import Filter from "./filter.jsx";
import Image from "./image.jsx";
import Info from "./info.jsx";

export default function Job({ info }) {
  return (
    <div>
      <Image url={info.logo} />
      <Info detailedInfo={info} />
      <Filter info={info} />
    </div>
  );
}
