import Link from 'next/link';


function MainNavigation() {

  return (
    <header className="  capitalize w-full h-24 flex items-center justify-between bg-stromi-400 ">
      <div className="   text-5xl text-black ml-2 font-bold">travel recommender</div>
      <nav className='  text-3xl'>
        <ul className=' flex items-baseline'>
        <li className='mr-2 ml-6 hover:text-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-2 ml-6 hover:text-white' >
            <Link href='/register'>register</Link>
          </li>
          <li className='mr-2 ml-6 hover:text-white' >
            <Link href='/login'>login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;