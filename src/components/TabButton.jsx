import "../index.css"

export default function TabButton (props) {
    // function handleClick() {
    //     console.log(props.children);  
    // }
    return (<li> 
        <button className={props.isSelected ? "active" : ""} onClick={props.click}>{ props.children }</button> 
    </li>
    );
}