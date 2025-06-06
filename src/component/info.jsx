export default function Info({ detailedInfo }) {
  return (
    <div>
      <div>
        <div>
          <p>{detailedInfo.company}</p>
        </div>
        {detailedInfo.new === true && (
          <div>
            <p>New</p>
          </div>
        )}
        {detailedInfo.featured === true && (
          <div>
            <p>Featured</p>
          </div>
        )}
      </div>
      <div>
        <h2>{detailedInfo.position}</h2>
      </div>
      <div>
        <div>
          <ul>
            <li>{detailedInfo.postedAt}</li>
            <li>{detailedInfo.contract}</li>
            <li>{detailedInfo.location}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
