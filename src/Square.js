

const Square = ({colorValue,hexValue}) => {     //passing props here
  return (
    <section 
        className="square"
        style={{ backgroundColor:colorValue}}
    >
        <p>{colorValue ? colorValue:"Empty Value"}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue : "Empty Color Value"
}

export default Square