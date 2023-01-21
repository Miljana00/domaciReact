function Forma(){
 
    return(
        <div className="center">
            <h3>Pisite nam</h3>
            <div id='poruciParfem'>
                <form >
                    <input type="text" placeholder='Ime' className='razmak'  />
                    <input type="text" placeholder='Prezime' className='razmak' />
                    <input type="email" placeholder='Mail' className='razmak' />
                    <input type="text" placeholder='Broj telefona' className='razmak' />
                    <button  onClick={()=>{ alert('Uspesno ste se poslali poruku!');}} className='razmak'>Posalji</button>
                </form>
            </div>
           
        </div>
        
       
    );
}
export default Forma;