import React, { useEffect, useState } from 'react'
import '../App.css';
import Memecard from './Memecard';
import Shimmer from './Shimmer';
const Body = ()=>{
    const [Meme , setMeme]=useState(null);
    useEffect(()=>{
       fetchmeme();

    },[])

    const fetchmeme= async ()=>{
        try{
            const getmeme= await fetch('https://meme-api.com/gimme/10000');
            if(!getmeme.ok)
                {
                   throw new Error(`HTTP Status Error Status:${getmeme.status}` );
                }
            const memejson=await getmeme.json();
            
            // console.log(memejson);
            setMeme(memejson.memes)
            // console.log(Meme);

        }catch(e)
        {
            console.log(e);
        }
        
    }
    return (
        <div className='container'>

         {
            !Meme? (<Shimmer/>) : (Meme.map((data,index)=>(<Memecard key={index} {...data}/>)))
         }
        </div>
    )
}

export default Body ;