
const Botones = (props)=>{
    return(
    <div>
        <button onClick={()=>alert(props.m1)}>Modulo 1</button>
        <button onClick={()=>alert(props.m2)}>Modulo 2</button>
    </div>
    )
}

export default Botones