import React, { useState } from 'react'
import '../assets/css/main.css'
import {animals} from '../assets/data/data.js'

const GameTable = () => {
    const [animalName,setAnimalName] = useState('');
    const [gameStatus,setGameStatus] = useState("");

    const randomAnimalName=(()=>{
        const rand=  Math.floor(Math.random() * 10) + 1;
        setAnimalName(animals[rand]);
        setGameStatus('');
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
                    <td>Win</td>
                    <td>Animal Name</td>
                    <td>Animals</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GameTable
