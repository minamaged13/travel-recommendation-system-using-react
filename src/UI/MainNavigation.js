import Link from "next/link";
import { useSelector } from "react-redux";

function MainNavigation() {
  const loggedIn = useSelector((state) => state.user.isLoggedin);
  return (
  <header  class="sticky top-0 z-50 bg-white">
<div>
    <nav class="  text-lg text-gray-800 uppercase font-sen  ">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <img class="w-14 h-14" src="https://cdn-icons-png.flaticon.com/512/5219/5219574.png" />
                       
                    </a>
                  
                    <div class="hidden md:block">
                        <div class="flex items-baseline ml-10 space-x-4">
                            <a class="text-black-300  hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Home
                            </a>
                            {loggedIn&&
                            <a class="text-black-300  hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium" href="/recommender">
                                Explore
                            </a>}
                            {!loggedIn &&
                            <a class="text-black-300  hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium" href="/register">
                                Register
                            </a>}
                            {!loggedIn && <a class="text-black-300  hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium" href="/login">
                                Login
                            </a>}
                            {loggedIn && <a class="text-black-300  hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium" href="/profile">
                                Profile
                            </a>}
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="flex items-center ml-4 md:ml-6">
                    </div>
                </div>
                <div class="flex -mr-2 md:hidden">
                    <button class="text-gray-800  hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-black-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Home
                </a>
                <a class="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Gallery
                </a>
                <a class="text-gray-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Content
                </a>
                <a class="text-gray-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</div>
</header>
  );
}

export default MainNavigation;
