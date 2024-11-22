import React from 'react'
import '../assets/css/main.css'

const GameTable = () => {
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
