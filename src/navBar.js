import IconoCarrito from "./CartWidget";

function navBar (){
   return(
    <nav className="browser">
        <a className="brandBusiness">PRAGA</a>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">CONTACTO</a></li>
            <li><a href="">PRODUCTOS</a></li>
        </ul>
         <img src={IconoCarrito.img} className="cart"/>
    </nav>
    );
}

export default navBar;