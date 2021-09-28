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
   res.json(cowData);
});
// get data 
router.get('/v1/data', async (req, res) => {
    let maxDataPoint = req.query.limit || 20;
    const myData = await SensorData.find({}).sort('-date').limit(parseInt(maxDataPoint)).catch(err=>{});
    res.status(200);
    res.json(myData);
});
// get date
router.get('/v1/date',async (req, res) => {
    const maxDataPoint= req.query.limit;
    const myData = await SensorData.find({}).sort('-date').limit(parseInt(maxDataPoint)).catch(err=>{});
    let result = [];
    myData.forEach(elm=>{
        result.push(elm.date.toString().substring(0,25));
    });
    res.status(200);
    res.json(result);
});
module.exports = router;
