import "../index.css"

export default function TabButton (props) {
    // function handleClick() {
    //     console.log(props.children);  
    // }
    return (<li> 
        <button onClick={props.click}>{ props.children }</button> 
    </li>
    );
}