import { Fragment, useState } from "react";
import Link from "next/link";
import BasicInfo from "@/components/BasicInfo";
import MyPreferences from "@/components/MyPreferences";
const profile = () => {
  const [basicInfo, setBasicInfo] = useState(true);

  const toggle = () => {
    setBasicInfo((prev) => !prev);
  };
  return (
    <Fragment>
      <ul className="mb-5 flex list-none flex-col flex-wrap justify-center border-b-0 pl-0 md:flex-row">
        <li role="presentation" className=" text-center">
          <button
            onClick={toggle}
            className={` ${
              basicInfo ? "text-gray-600 bg-neutral-100" : ""
            } hover:bg-neutral-100 my-2 block border-x-0 hover:text-gray-600 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent  `}
          >
            basic Info
          </button>
        </li>
        <li className="flex-auto text-center">
          <button
            onClick={toggle}
            className={` ${
              basicInfo ? "" : "text-gray-600 bg-neutral-100"
            }  my-2 block border-x-0 hover:text-gray-600 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 `}
          >
            my preferences
          </button>
        </li>
      </ul>

      {basicInfo && <BasicInfo />}
      {!basicInfo && <MyPreferences/> }
    </Fragment>
  );
};
export default profile;
