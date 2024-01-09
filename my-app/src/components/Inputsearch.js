// import React from 'react'
// import FilterCountry from './FilterCountry'

// export default function Inputsearch() {

//     const [searchValue, setSearchValue] = useState('')
//     const [countryList, setCountryList] = useState([])




//     return (
//         <div>

//             <FilterCountry setCountryList={setCountryList} countryList={countryList} />
//             <input type='text' placeholder='Enter search' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
//             <Coffee catalogArrayToRender={Coffeetypes.filter((item) => {
//                 if (countryList.length === 0) {
//                     return item
//                 }
//                 if (countryList.includes(item.country)) {
//                     return item
//                 }
//             }).filter((item) => {
//                 if (item.productName.toLowerCase().includes(searchValue.toLowerCase()) || item.country.toLowerCase().includes(searchValue.toLowerCase())) {
//                     return item
//                 }
//                 // if (item.country.toLowerCase().includes(searchValue.toLowerCase())) {
//                 //     return item
//                 // }
//             })} catalogTitle="Coffee house" />

//         </div>

//     )

// }
