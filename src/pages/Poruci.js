import { useState } from "react";
import items from "../data"
function Poruci(){
    function posalji(){
    document.getElementById("prikaz").innerHTML=`

        <h4>Ime:${ime}</h4>
        <h4>Prezime${prezime}</h4>
        <h4>E-mail:${mail}</h4>
        <h4>Telefon:${telefon}</h4>
        <h4>Parfem:${parfemi}</h4>
        
        `;   
    
    }
    const [ime,setIme]=useState("");
    const[prezime,setPrezime]=useState("");
    const[mail,setMail]=useState("");
    const[telefon,setTelefon]=useState("");
    const[parfemi,setParfemi]=useState("");
    return(
        <div className="center">
            <h3>Forma za narucivanje parfema</h3>
            <div id='poruciParfem'>
                <form >
                    <input type="text" placeholder='Ime' className='razmak' onInput={(e) => { setIme(e.target.value);}} />
                    <input type="text" placeholder='Prezime' className='razmak' onInput={(e) => { setPrezime(e.target.value);}} />
                    <input type="email" placeholder='Mail' className='razmak' onInput={(e) => { setMail(e.target.value); }} />
                    <input type="text" placeholder='Broj telefona' className='razmak' onInput={(e) => { setTelefon(e.target.value);}} />
                    <select name="parfemi" className='razmak' onChange={(e) => { setParfemi(e.target.value) }} >
                        {items.map((item) => (
                            <option key={item.id} >{item.title}</option>
                        ))}

                    </select>
                    <button onClick={(e) => { e.preventDefault(); posalji() }} className='razmak'>Poruci</button>
                </form>
            </div>
            <h6>Podaci o narucenom:</h6>
            <div id="prikaz">
            </div>
        </div>
        
       
    );
}
export default Poruci;