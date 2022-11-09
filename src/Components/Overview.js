import React from 'react'
import {useSelector} from 'react-redux'
import {selectDisplay} from '../redux/slices/displayCountrySlice'

function Overview() {

    const currentDisplay = useSelector(selectDisplay);

  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>
        <table className='overview-table'>
        <tbody>
           <tr>
                <th>Capitol:</th>
                {currentDisplay.capital.map((e) => (
                    <td>{e}</td>))}
            </tr>   
            <tr>
                <th>Population:</th>
                <td>{currentDisplay.population}</td>
            </tr> 

            <tr>
                <th>Region:</th>
                <td>{currentDisplay.region}</td>
            </tr> 

            <tr>
                <th>Subregion:</th>
                <td>{currentDisplay.subregion}</td>
            </tr> 

            <tr>
                <th>UN Member:</th>
                <td>{currentDisplay.unMember ? 'Yes' : 'No'}</td>
            </tr> 

           
            </tbody>
        </table>
    </div>
  )
}

export default Overview