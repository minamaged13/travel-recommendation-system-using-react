import { Fragment } from "react";
import Image from "next/image";

const Card = (props) => {
  const h = props.card.h;
  const p = props.card.p;
  const classname = props.classname;
  const src = props.card.src;
  return (
    <Fragment>
      <div className={classname}>
        <h5 className="text-5xl sm:text-4xl text-center font-bold">{h}</h5>
        <img
          src={src}
          class=" mt-10  object-cover w-50 h-full rounded-lg"
        ></img>
        <p className=" text-2xl text-black mt-10 text-center">{p}</p>
      </div>
    </Fragment>
  );
};
export default Card;
