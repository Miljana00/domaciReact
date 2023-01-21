import { useState } from 'react';
import './Navbar.css'
function Navbar() {
    const [items] = useState([
        {
            title:'Pocetna',
            url:'/',
            cName:'nav-links'
    
        },
        {
            title:'Poruci parfem',
            url:'/poruci',
            cName:'nav-links'
    
        },
        {
            title:'Kontaktirajte nas',
            url:'/kontakt',
            cName:'nav-links'
    
        },
        
      ]);
    
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Parfemi</h1>
                <ul className= 'nav-menu'>
                    {items.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    
}

export default Navbar;