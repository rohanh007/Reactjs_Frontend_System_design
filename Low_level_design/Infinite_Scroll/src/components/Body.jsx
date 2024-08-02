import React, { useEffect, useState } from 'react'
import '../App.css';
import Memecard from './Memecard';
import Shimmer from './Shimmer';

const Body = ()=>{
    const [Meme , setMeme]=useState([]);

    useEffect(()=>{
       fetchmeme();
       window.addEventListener("scroll", handleScroll);
    //    console.log(handleScroll);
       

       return ()=> window.removeEventListener("scroll",handleScroll);
    },[])

    const handleScroll=()=>{
         console.log(`ScrollY : ${window.scrollY}`);
         console.log(`Inner Height ${window.innerHeight}`);
         console.log(`ScrollHeight ${document.body.scrollHeight}`);
         console.log(window.scrollY+window.innerHeight);
    if(console.log(window.scrollY + window.innerHeight >= document.body.scrollHeight))    {
            console.log("DFTGYHUJIK")
            fetchmeme();
        }

    }

    const fetchmeme= async ()=>{

        try{
            const getmeme= await fetch('https://meme-api.com/gimme/10');
            if(!getmeme.ok)
                {
                   throw new Error(`HTTP Status Error Status:${getmeme.status}` );
                }
            const memejson=await getmeme.json();
            
            console.log(memejson);
            setMeme((Meme)=>[...Meme , ...memejson.memes])
            // console.log(Meme);

        }catch(e)
        {
            console.log(e);
        }
        
    }

    return (
        <div className='container'>

         {
         (Meme.map((data,index)=>(<Memecard key={index} {...data}/>)))
         }
        </div>
    )
}

export default Body ;