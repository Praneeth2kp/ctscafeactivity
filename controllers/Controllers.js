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
const birds=require('../models/birds');


// APPS
exports.homepage=async(req,res)=>{
    try {
        const limitNumber=20;
        const Animals=await animals.find({}).limit(limitNumber);
        res.render('index', { title:"Ad Load",Animals });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}


// exports.plants=async(req,res)=>{
//     try {
//         const limitNumber=10;
//         const plants=await plants.find({}).limit(limitNumber);
//         res.render('plants', { title:"Ad Load", plants });
//     } catch (error) {
//         res.status(500).send({message: error.message || "Error Occured"});
//     }
// }


exports.birds=async(req,res)=>{
    try {
        const limitNumber=10;
        const birds=await birds.find({}).limit(limitNumber);
        res.render('birds', { title:"Ad Load", birds });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}


// exports.nature=async(req,res)=>{
//     try {
//         const limitNumber=10;
//         const nature=await nature.find({}).limit(limitNumber);
//         res.render('nature', { title:"Ad Load", nature });
//     } catch (error) {
//         res.status(500).send({message: error.message || "Error Occured"});
//     }
// }










async function insertDymmybirdsData(){
  try {
    await birds.insertMany([
      {
        "name": "b1",
        "image": "b1.jpg"
      },
      {
        "name": "b2",
        "image": "b2.jpg"
      }, 
      {
        "name": "b3",
        "image": "b3.jpg"
      },
      {
        "name": "b4",
        "image": "b4.jpg"
      }, 
      {
        "name": "b5",
        "image": "b5.jpg"
      },
      {
        "name": "b6",
        "image": "b6.jpg"
      },
      {
        "name": "b7",
        "image": "b7.jpg"
      },
      {
        "name": "b8",
        "image": "b8.jpg"
      },
      {
        "name": "b9",
        "image": "b9.jpg"
      },
      {
        "name": "b10",
        "image": "b10.jpg"
      }
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmybirdsData();