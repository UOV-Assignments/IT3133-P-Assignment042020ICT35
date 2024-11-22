import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'
import {animals} from '../assets/data/data.js'

const GameTable = () => {
    const [animalName,setAnimalName] = useState('');
    const [gameStatus,setGameStatus] = useState("");

    useEffect(() => {
        randomAnimalName()
      }, [])
    const randomAnimalName=(()=>{
        const rand=  Math.floor(Math.random() * 10) + 1;
        setAnimalName(animals[rand]);
        setGameStatus('');
      })

      const handleClick=((e)=>{
        if(e === animalName.name){
            setGameStatus('WIN')
            setTimeout(() => {
                randomAnimalName()
            }, 2000);
          
        }else{
            setGameStatus('LOSS')
        }
    })
  return (
    <>
    <div className='container'>
        <table>
            <thead>
                <tr >
                    <th colSpan={3}>ANIMAL MATCHING GAME</th>
                </tr>
                <tr >
                    <th>Result</th>
                    <th>Animal Name</th>
                    <th>Selecte the animal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='names' style={gameStatus==='WIN'? {color:'#67de49'}:{color:'red'} }>{gameStatus}</td>
                <td>{animalName.name}</td>
                    <td><div>
                         <div className='imgtags'>{animals.map(animal=>
                        <div  onClick={()=>handleClick(animal.name)}>
                            <img src={require(`../assets/images/${animal.img}`)} alt='img' className='imgCard' />
                            </div>
                        
                    )}</div></div></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GameTable
