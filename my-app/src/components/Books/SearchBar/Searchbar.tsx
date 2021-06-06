import React, { useState } from 'react'
import styles from './Searchbar.module.css';


function Searchbar(props:any){
    
        //wszystkie wartosci ktore trzymamy np. w inpucie trzeba zalaczyc stan
        //hook
    const [term,setTerm] = useState('');

    const search = () => {
        props.onSearch(term);
    }

    //            onKeyDown={e => console.log(e)}
//e.key === 'Enter' && search() sparwdza prawde jezeli 1 to prada to 2 wywoluje
    const onKeyDownHandler = (e:any) => {
           if(e.key === 'Enter')
           search(); 
    }

    return (
    <div className={`${styles.searchbarWitdh} d-flex`} >

            <input  
            value={term}
            onKeyDown={onKeyDownHandler}
            onChange={e => setTerm(e.target.value)}
            type="text" 
            placeholder="Szukaj po tytule ..." 
            className="form-control"
                    />
            <button 
            onClick={search}
            className="ml-4 btn btn-secondary" 
            >Szukaj</button>

    </div>
    );
}



export default Searchbar;