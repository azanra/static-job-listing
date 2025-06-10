export default function Info({ detailedInfo }) {
  return (
    <div className="mt-6">
      <div className="flex gap-4">
        <div>
          <p className="text-(---Desaturated-Dark-Cyan) font-bold text-lg">
            {detailedInfo.company}
          </p>
        </div>
        {detailedInfo.new === true && (
          <div className="bg-(---Desaturated-Dark-Cyan) text-white text-base center rounded-full px-4 ">
            <p className="mt-1 font-medium">New</p>
          </div>
        )}
        {detailedInfo.featured === true && (
          <div className="bg-black rounded-full px-4">
            <p className="text-white mt-1 font-medium">Featured</p>
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold text-2xl hover:text-(---Desaturated-Dark-Cyan) cursor-pointer">
          {detailedInfo.position}
        </h2>
      </div>
      <div>
        <div>
          <ul className="flex gap-8 mb-4 mt-2 list-disc list-inside">
            <li className="text-(--Dark-Grayish-Cyan) list-none pb-[2px]">
              {detailedInfo.postedAt}
            </li>
            <li className="text-(--Dark-Grayish-Cyan) infoItemList">
              {detailedInfo.contract}
            </li>
            <li className="text-(--Dark-Grayish-Cyan) infoItemList">
              {detailedInfo.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
