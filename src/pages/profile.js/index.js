import {Fragment, useState} from 'react';
import React from 'react';
import Link from 'next/link';
import BasicInfo from '@/components/BasicInfo';
import MyPreferences from '@/components/MyPreferences';
const profile = () => {
  const [basicInfo, setBasicInfo] = useState (true);

  const toggle = () => {
    setBasicInfo (prev => !prev);
  };
  return (
    <div class="">

      <div
        class=" absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 "
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <button
          onClick={toggle}
          className={` ${basicInfo ? 'text-gray-600 bg-neutral-100 w-full' : ''} hover:bg-neutral-100  w-full my-2 block border-x-0 hover:text-gray-600 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent  `}
        >
          basic Info
        </button>
        <button
          onClick={toggle}
          className={` ${basicInfo ? '' : 'text-gray-600 bg-neutral-100 w-full'}  my-2 block border-x-0 hover:text-gray-600 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 `}
        >
          my preferences
        </button>
      </div>

      <div>
        {basicInfo && <BasicInfo />}

        {!basicInfo && <MyPreferences />}
      </div>

    </div >
  );
};
export default profile;
