export default function Image({ url }) {
  return (
    <div className="center">
      <img src={url} alt="Logo Image" className="h-[80px]" />
    </div>
  );
}
