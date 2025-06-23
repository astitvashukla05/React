function TabButtons(props){
    // function handleClick(){
    //     console.log("Hello")
    // }
    return(
        <li><button className={props.isactive ? "active" :null} onClick={props.onSelect}> {props.children} </button></li>
    )
}
export default TabButtons