import { Fragment } from "react";

import Image from "next/image";

import Card from "@/UI/Card";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Home() {
  const loggedIn = useSelector((state) => state.user.isLoggedin);
  const destinations = {
    card1: {
      h: "luxor",
      p: "One-third of the world's monuments just in one place",
    },
    card2: { h: "Cairo", p: "enjoy delicious food with locals" },
    card3: { h: "alexandria", p: "freska on  corniche is a mood changer " },
    card4: { h: "giza", p: "explore giza pyramids" },
    card5: { h: "fayoum", p: "enjoy wadi el rayan protectory" },
    card6: { h: "hurghada", p: "wanna swim with the dolphines?" },
    card7: { h: "sharm el sheikh", p: "nemo is waiting for you" },
  };

  return (
    <Fragment>

    
    <div>
      <div className="capitalize box-content h-screen  flex justify-between  bg-blue-500">
        <div className="font-mono text-7xl mt-48 ml-12">
          {" "}
          egypt <br />
          is waiting for you{" "}
        </div>
        <iframe
          className="rounded-lg m-10 mt-40"
          width="700"
          height="350"
          src="https://www.youtube.com/embed/BapSQFJPMM0?autoplay=1 "
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
          allowFullscreen
        ></iframe>
      </div>
      <div className="capitalize  h-screen flex justify-between pt-32 font-mono  bg-red-500">
        <h1 className="text-7xl font-mono  text-black ml-16   ">
          {" "}
          travel <br></br>is to live{" "}
        </h1>
        <Image
          src="/image1.jpg"
          width={626}
          height={418}
          className="rounded-2xl ml-auto h-96 mr-24"
        ></Image>
      </div>
      <div className="capitalize box-content  h-screen  pt-20 bg-white">
        <h5 className="text-5xl text-center font-mono">
          {" "}
          what is your next destination?
        </h5>
        <div
          className="grid grid-cols-3 gap-3 gap-y-6
         mt-16 ml-12"
        >
          <Card
            card={destinations.card1}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-500 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card2}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-emerald-500 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card3}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-cyan-400 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card4}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-500 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card5}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-sky-500 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card6}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-fuchsia-500 dark:border-gray-700 dark:hover:bg-gray-700"
          />
          <Card
            card={destinations.card7}
            classname="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-teal-400 dark:border-gray-700 dark:hover:bg-gray-700"
          />
        </div>
      </div>

      <div className="">
        <footer>
          <div className="text-4xl text-center p-16 bg-blue-500 capitalize">
            {" "}
            don't forget to enjoy your day <br />
           { !loggedIn && <div>
              <Link href="/register" className=" text-2xl text-white mr-28">
                {" "}
                sign up
              </Link>
              <Link href="/login" className=" text-2xl text-white">
                {" "}
                login
              </Link>
            </div>}
          </div>
        </footer>
      </div>
    </div>
    </Fragment>
  );
}
