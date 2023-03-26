const Button=(props)=>{
    
return <button className="text-2xl bg-yellow-400 rounded-2xl h-20 ml-4 mr-4 hover:bg-blue-500" onClick={props.handleClick}>{props.text}</button>
}
export default Button;