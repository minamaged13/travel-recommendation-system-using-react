import { Fragment } from "react";
import Image from "next/image";

const Card=(props)=>{
const h= props.card.h
const p= props.card.p
const classname= props.classname
    return <Fragment>
        <div  className={classname}>
    <h5 className="mb-2 font-mono text-4xl font-bold text-center  tracking-tight text-white dark:text-white">{h}</h5>
    <p className="font-mono text-2xl text-white dark:text-white">{p}</p>
</div>

    </Fragment>

}
export default Card;