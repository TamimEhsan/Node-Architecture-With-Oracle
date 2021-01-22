const Controller = require('./base').Controller;
const TopicService = require('../service/topic').TopicService;
class TopicController extends Controller{
    constructor() {
        super();
    }
    list = async (req,res,next)=>{
        let topicService = new TopicService();
        let topics = await topicService.list();
        if( !topics.length ){
            res.status(204).json({code: "E0001", description: "No topic found."});
        }
        res.status(200).json(topics[0]);
    };
    fetch = async (req,res,next)=>{
        let id = req.params.id;

        let topicService = new TopicService();
        let topic = await topicService.fetch(id);
        if(!topic)
            res.status(404).json({code: "E0002", description: "Topic with id:" + id + " not found."});
        else
            res.status(200).json(topic);
    };
};


exports.TopicController = TopicController;