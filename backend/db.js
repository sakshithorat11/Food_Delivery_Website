const mongoose = require('mongoose');
// const mongoURI="mongodb+srv://gofood:Priti26@cluster0.xdxry6e.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoURI = "mongodb://gofood:Priti26@ac-czsamqv-shard-00-00.xdxry6e.mongodb.net:27017,ac-czsamqv-shard-00-01.xdxry6e.mongodb.net:27017,ac-czsamqv-shard-00-02.xdxry6e.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-eg7ieg-shard-0&authSource=admin&retryWrites=true&w=majority"

// const mongodb=()=>{
//     mongoose.connect(mongoURI,()=>{
//         //  useNewUrlParser:true
//         // useUnifiedTopology;true
//     },).then(()=> console.log("Successfully connected...!!!"))
//     .catch((err)=>{console.error(err);});
// }


// // }
const mongodb = async () => {  
    await mongoose.connect(mongoURI, { useNewParser: true }, async (err, result) => {
        if (err) console.log("----", err)
        else {
            console.log("connected");
            const f = await mongoose.connection.db.collection('fooditems');/// fooditems is collection
            f.find({}).toArray(function (err, data) {
                // if(err) console.log(err);
                // else
                // {
                //     //console.log(data);
                //       global.food_items=data;
                //      console.log(global.food_items);

                // }

                const fd =  mongoose.connection.db.collection('foodData');
                fd.find({}).toArray(function (err, catData){
                    if (err) console.log(err);
                    else {
                        //console.log(data);
                        global.food_items = data;
                        global.food_cat = catData;
                        // console.log(global.food_items);
                    }
                    })


            })
        }
    });
}

module.exports = mongodb;