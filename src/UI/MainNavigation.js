import Link from "next/link";
import { useSelector } from "react-redux";

function MainNavigation() {
  const loggedIn = useSelector((state) => state.user.isLoggedin);
  return (
    <header className="capitalize w-full h-24 flex items-center justify-between bg-blue-500 ">
      <Link
        href="/"
        className="   text-5xl hover:text-black ml-2 font-mono  text-white"
      >
        Explore Egypt
      </Link>
      <nav className="  text-3xl">
        <ul className=" flex items-baseline">
          <li className="mr-2 ml-6 text-white hover:text-black">
            <Link href="/">Home</Link>
          </li>
         { loggedIn&&<li className="mr-2 ml-6 hover:text-black text-white">
            <Link href="/recommender">explore</Link>
          </li>}
          {!loggedIn && (
            <li className="mr-2 ml-6 font-mono  hover:text-black text-white">
              <Link href="/register">register</Link>
            </li>
          )}
         { !loggedIn && (
            <li className="mr-2 ml-6 hover:text-black text-white">
              <Link href="/login">login</Link>
            </li>
          )}
          {loggedIn && (
            <li className="mr-2 ml-6 hover:text-black text-white">
              <Link href="/profile">profile</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
