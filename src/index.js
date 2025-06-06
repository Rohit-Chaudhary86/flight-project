const express=require('express')

const {ServerConfig}= require('./config')
const apiRoutes=require('./routes')

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Server started on PORT : ${ServerConfig.PORT}`);

        const {City,Airport}=require('./models');
        // const bengaluru=await City.findByPk(1);
        // console.log(bengaluru)
        // const airport=await Airport.create({name:"khurja airport",code:"KRJ",cityId:1});
        // const dbpairport=await city.createAirport({name:"hubblie airport",code:"DEL",});
        // console.log(dbpairport);
        // const airportInCity =await city.getAirports();
        // console.log(airportInCity )
        await City.destroy({
            where:{
                id:4
            }
        });
})