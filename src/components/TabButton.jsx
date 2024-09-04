import "../index.css"

export default function TabButton ({isSelected, children, ...props}) {
    // function handleClick() {
    //     console.log(props.children);  
    // }
    return (<li> 
        <button className={isSelected ? "active" : ""} {...props}>{ children }</button> 
    </li>
    );
}