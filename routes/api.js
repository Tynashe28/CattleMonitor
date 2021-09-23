const express = require('express');
const router = express.Router();


// Load SensorData model
const SensorData = require('../Models/SensorsData');


// Post data to db
router.post('/v1/fieldParams',async(req,res)=>{
   
    const cowData = {
        lat : req.body.lat,
        lng: req.body.lng,
        temperature :req.body.temperature,
        pulse :req.body.pulse
    }
    const sendData = new SensorData(cowData);
    await sendData.save().catch(err=>{});
});


// get moisture content
router.get('/v1/moisture', async (req, res) => {
    let field = req.query.field;
    let maxDataPoint = req.query.limit || 20;
    if(field<0 ||field>4){
        return;
    }
    const myData = await SensorData.find({}).sort('date').limit(parseInt(maxDataPoint)).catch(err=>{});
    let result = [];
    myData.forEach(elm=>{
        result.push(elm.moisture[field]);
    });
    res.status(200);
    res.json(result);
});
// get all moisture content
router.get('/v1/allMoisture', async (req, res) => {
    let maxDataPoint = req.query.limit || 20;
    const myData = await SensorData.find({}).sort('date').limit(parseInt(maxDataPoint)).catch(err=>{});
    let result = [[],[],[],[]];
    myData.forEach(elm=>{
        for(let i=0;i<4;i++){
            result[i].push(elm.moisture[i]);
        }
    });
    res.status(200);
    res.json(result);
});

// get temperature
router.get('/v1/temperature',async (req, res) => {
    res.type('application/json');
    const maxDataPoint= req.query.limit;
    const myData = await SensorData.find({}).sort('date').limit(parseInt(maxDataPoint)).catch(err=>{});
    let result = [];
    myData.forEach(elm=>{
        result.push(elm.temperature);
    });
    res.status(200);
    res.json(result);
    
});

// get date
router.get('/v1/date',async (req, res) => {
    const maxDataPoint= req.query.limit;
    const myData = await SensorData.find({}).sort('date').limit(parseInt(maxDataPoint)).catch(err=>{});
    let result = [];
    myData.forEach(elm=>{
        result.push(elm.date.toString().substring(0,25));
    });
    res.status(200);
    res.json(result);
});



module.exports = router;