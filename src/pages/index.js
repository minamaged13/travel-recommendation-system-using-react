import { Fragment } from "react";
import Card from "@/UI/Card";
import useHomepageCards from "@/hooks/useHomepageCards";
import Footer from "@/components/Footer";
export default function Home() {
  
  const destinations = useHomepageCards();

  return (
    <Fragment>
      <div class="relative z-20 flex items-center overflow-hidden bg-white ">
        <div class="container relative flex px-6 py-16 mx-auto">
          <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span class="w-20 h-2 mb-12 bg-gray-800 "></span>
            <h1 class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl ">
              Egypt
              <span class="text-5xl sm:text-7xl">is waiting for you</span>
            </h1>
            <br />
            <p class="text-2xl text-gray-700 sm:text-2xl">
              A one-stop tool for travelers planning their vacation in Egypt
            </p>
          </div>
          <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/man-taking-a-self-portrait-at-the-pyramids-in-egypt-7259144-5904775.png"
              class="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block "
            />
          </div>
        </div>
      </div>
      <hr />
      <h5 class="text-5xl sm:text-4xl text-center mb-10 mt-20">
        {" "}
        What is your next destination?
      </h5>
      <div class="grid grid-cols-3 justify-items-center gap-4 pl-40 pr-40">
        {destinations.map((card) => (
          <div class=" p-6 rounded-lg">
            <Card
              card={card}  
              classname="flex flex-col w-full h-full justify-center p-10 rounded-3xl shadow-2xl"
            />
          </div>
        ))}
      </div>

      <Footer />
    </Fragment>
  );
}
