import "./Header.css";
import Bulbasaur from "../assets/bulbasaur.svg";

function Header() {

    return(
<header>
    <section>
<h1>Bulbasaur</h1> 
<h2>ID: 001</h2>
</section>
  <img src={Bulbasaur}></img>
</header>
    )

}

export default Header;