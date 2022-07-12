import { useEffect,useState } from 'react'
import axios from 'axios'


const Content = () => {
    const[data,setData]=useState([])
    const handleClick=()=>{
        window.location.reload()
    }
    useEffect(()=>{
        axios({
            method:"GET",
            url:`https://api.adviceslip.com/advice`
        }).then(res=>{
            /*console.log(res.data.slip.advice)*/
            setData([res.data])
        })/*.catch(e=>console.log(e))*/
    },[])

  return (
   <div className='content'>
     {data.map((item)=>(
        <div className="item-div" key={item.slip.id}>
            <div className='adv-id'> ADVICE # {item.slip.id}</div>
            <div className='adv'>"{item.slip.advice}"</div>
            <div className="patt-dvd"><img src="./assets/pattern-divider-desktop.svg" alt="" className='divider' /></div>
            <div className="dice-cont"><img src="./assets/icon-dice.svg" alt="" className='dice-img' onClick={handleClick}/></div>
        </div>
        
     ))}
   </div>
     
   )
}

export default Content