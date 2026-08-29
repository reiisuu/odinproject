function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
        handleClick: () => void{} // 
    }


    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    )
}

export default Button;