// import React from 'react'

// export default function FilterCountry({ countryList, setCountryList }) {
//     return (

//         <div>
//             <button style={countryList.includes('Brazil') ? { fontWeight: 'bold' } : null} onClick={() => {
//                 if (!countryList.includes('Brazil')) { setCountryList([...countryList, 'Brazil']) } else {
//                     setCountryList([...countryList.filter((country) => { if (country !== 'Brazil') { return country } })])
//                 }
//             }}>Brazil</button>
//             <button style={countryList.includes('Kenya') ? { fontWeight: 'bold' } : null} onClick={() => {
//                 if (!countryList.includes('Kenya')) { setCountryList([...countryList, 'Kenya']) } else {
//                     setCountryList([...countryList.filter((country) => { if (country !== 'Kenya') { return country } })])
//                 }
//             }}>Kenya</button>
//             <button style={countryList.includes('Columbia') ? { fontWeight: 'bold' } : null} onClick={() => {
//                 if (!countryList.includes('Columbia')) { setCountryList([...countryList, 'Columbia']) } else {
//                     setCountryList([...countryList.filter((country) => { if (country !== 'Columbia') { return country } })])
//                 }
//             }}>Columbia</button>

//         </div >

//     )
// }
