import axios from 'axios'

//********************************************************without Redux Thunk

// export const  deleteEmployee=(employeeId)=> {  
     
//         return {  
//             type: 'DELETE_EMPLOYEE',  
//             payload: employeeId  ,
//             //console.log(payload)
//         }

// }; 
// export const  addEmployee=(data)=> {  
     
//     return {  
//         type: 'ADD_EMPLOYEE',  
//         payload: data  ,
//         //console.log(payload)
//     }

// }; 
// export const  updateEmployee=(data)=> {  
     
//     return {  
//         type: 'EDIT_EMPLOYEE',  
//         payload: data  ,
//         //console.log(payload)
//     }

// }; 


//***************************************************************with Redux Thunk */

// export const getEmployee = () =>{ 

//         // return {                            //yaha ham direct object return kar rahte the
//         //     type: 'GET_EMPLOYEE'               //but in case thunk ham first fetch karenge then return  karenge
//         // }   
        
//         // function return kar rahe hai
//         retrun  (dispatch)=>{
//             //ab fetch karenge and then dispatch karnge
//             fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//              //above hame promise mila, so to resolve usse then
//             .then(res =>{ 
//                 console.log(res)
//                 //now dispatch
//                 dispatch({type: 'GET_EMPLOYEE',payload:res})
//                 })
//         }
// }; 

export const getEmployee=()=> async (dispatch)=>{

    //fetching data,then dispatch
    const result=await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
        type:'GET_EMPLOYEE',
        payload:result.data
    })
}



export const  deleteEmployee=(id)=>async (dispatch) =>{  

await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) 
//console.log(result)
    dispatch({  
        type: 'DELETE_EMPLOYEE',  
        payload:id  ,
        //console.log(payload)
    })
}; 
export const  addEmployee=(data)=>async (dispatch) =>{  

 const result =await axios.post("https://jsonplaceholder.typicode.com/users",data)
    
dispatch({  
    type: 'ADD_EMPLOYEE',  
    payload: result.data  ,
   // console.log(payload)
})


}; 
export const  updateEmployee=(data)=>async (dispatch)=> {  

    const result=await axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`,data);
console.log(result.data)
dispatch({  
    type: 'EDIT_EMPLOYEE',  
    payload: result.data 
    //console.log(payload)
})


}; 


