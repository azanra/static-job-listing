import Image from "./image.jsx";

export default function Job({ info }) {
  return (
    <div>
      <Image url={info.logo} />
    </div>
  );
}
