//initialize express router
let router = require('express').Router();

const Subscriber = require('./models');
//set default API response
/* router.get('/', function(req,res){
    res.json({
        status: 'API works',
        message: 'Welcome to first rest api'
    })
}); */

//Getting all
router.get('/', async (req,res)=>{
try{
    const subscribers = await Subscriber.find();
    res.json(subscribers);
} catch(err){
    res.status(500).json({message: err.message})
    //something wrong on server side: 500
}
})
//Getting one
router.get('/:id', (req, res)=>{
res.send(req.params.id)
})
//creating one
router.post('/', async (req, res)=>{
const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
})
try{
const newSubscriber = await subscriber.save();
res.status(201).json(newSubscriber);
} catch(err){
    res.status(400).json({
        message: err.message
    });
    //user gives bad data: 400
}
})
//updating one
router.patch('/', (req, res)=>{

})
//patch updates only what user passes and put updates all info
//deleting one
router.delete('/:id', (req, res)=>{

})

//export api routes
module.exports = router;
