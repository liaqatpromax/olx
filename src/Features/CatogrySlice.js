import { createSlice } from "@reduxjs/toolkit";
import car1 from '../assets/car-1.webp'
import car2 from '../assets/car-2.webp'
import car3 from '../assets/car-3.webp'
import car4 from '../assets/car-4.webp'
import mb from '../assets/mb-1.webp'
import mb2 from '../assets/mb-2.webp'
import mb3 from '../assets/mb-3.webp'
import mb4 from '../assets/mb-4.webp'

const initialState = {
    catogries: {

         motors :  [
            {img:car1,
              label:'Honda City',
              location:'Chowrangi town, Karachi',
              price:'Rs. 23,00,000',
              time:'1 month ago'
            }
            , {img:car2,
              label:'WaganR',
              location:'Chobarji town, Hyderabad',
              price:'Rs. 23,69,000',
              time:'3 weeks ago'
            },
            {
              img:car3,
              label:'Toyota Prius',
              location:'Gulberg, Karachi',
              price:'89,00,000',
              time:'1 day ago'
            },
            {
              img:car4,
              label:'Honda Civic',
              location:'IBA, Sukhurabad',
              price:'Rs. 63,00,000',
              time:'1 hour ago'
            }
          ],
           "mobile phones" :[
            {
              label:'Samsung galaxy s21 ',
              img:mb,
              price:'Rs 95,000',
              location:'Sarfaraz Colony, Karachi',
              time:'1 week ago'
            },
            {
              label:'Vivo s1 pro',
              img:mb2,
              price:'Rs 32,000',
              location:'Layari, Karachi',
              time:'3 week ago'
            },
            {
              label:'google pixel 7pro',
              img:mb3,
              price:'Rs 68,000',
              location:'Machar Colony, Karachi',
              time:'3 days ago'
            },
            {
              label:'Oneplus 10 pro',
              img:mb4,
              price:'Rs 92,000',
              location:'chorangi town, Karachi',
              time:'2 week ago'
            },
          ]
    },
    selectedItem:null,
    sortedLaw:[]
        
    
}

export const catSlice = createSlice({
name:'catogry',
initialState,
reducers:{
    catOpen:(state,action) => {
        
        const sortLow = action.payload;

        console.log(sortLow)
        const sortedLow =sortLow.sort((a,b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        state.catogry.sortedLaw = sortedLow
        console.log(console.log(sortedLow))

      
    }
}
})
export const{ catOpen } = catSlice.actions
export default catSlice.reducer