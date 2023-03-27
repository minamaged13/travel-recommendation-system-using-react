import Link from 'next/link';


function MainNavigation() {

  return (
    <header className="   capitalize w-full h-24 flex items-center justify-between bg-blue-500 ">
      <Link href='/' className="   text-5xl hover:text-black ml-2 font-mono  text-white">Explore Egypt</Link>
      <nav className='  text-3xl'>
        <ul className=' flex items-baseline'>
        <li className='mr-2 ml-6 text-white hover:text-black'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-2 ml-6 hover:text-black text-white' >
            <Link href='/recommender'>explore</Link>
          </li>
          <li className='mr-2 ml-6 font-mono  hover:text-black text-white' >
            <Link href='/register'>register</Link>
          </li>
          <li className='mr-2 ml-6 hover:text-black text-white' >
            <Link href='/login'>login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;