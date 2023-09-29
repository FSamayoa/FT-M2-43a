import Button from "../button/Button";

const Nav = () => {
    return(
        <nav style={{ backgroundColor: 'whitesmoke', padding: '20px', width:'100vw', borderRadius: '50px' }} >
            <Button 
                path='/home'
                text='Home'
            />
            <Button
                path='/form'
                text='Formulario'
            />
        </nav>
    )
}

export default Nav;