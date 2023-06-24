// exports.exploreAllPlants= async(req,res)=>{
//     try {
//         const limitNumber=20;
//         const searches=await mostsearched.find({}).limit(limitNumber);
//         res.render('MostSearched',{title:'Most Searched' , searches});  

//     } catch (error) {
//         res.status(500).send({message:error.message || "Error Occured" });   
// }
// }


require('../models/database');
const animals=require('../models/animals');


exports.homepage=async(req,res)=>{
    try {
        const limitNumber=20;
        const Animals=await animals.find({}).limit(limitNumber);
        res.render('index', { title:"Ad Load",Animals });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}







// async function insertDymmyanimalsData(){
//   try {
//     await animals.insertMany([
//       {
//         "name": "a1",
//         "id":"1",
//         "image": "a1.jpg"
//       },
//       {
//         "name": "a2",
//         "id":"2",
//         "image": "a2.jpg"
//       }, 
//       {
//         "name": "a3",
//         "id":"3",
//         "image": "a3.jpg"
//       },
//       {
//         "name": "a4",
//         "id":"4",
//         "image": "a4.jpg"
//       }, 
//       {
//         "name": "a5",
//         "id":"5",
//         "image": "a5.jpg"
//       },
//       {
//         "name": "a6",
//         "id":"6",
//         "image": "a6.jpg"
//       },
//       {
//         "name": "a7",
//         "id":"7",
//         "image": "a7.jpg"
//       },
//       {
//         "name": "a8",
//         "id":"8",
//         "image": "a8.jpg"
//       },
//       {
//         "name": "a9",
//         "id":"9",
//         "image": "a9.jpg"
//       },
//       {
//         "name": "a10",
//         "id":"10",
//         "image": "a10.jpg"
//       }
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDymmyanimalsData();