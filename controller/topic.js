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
}

exports.TopicController = TopicController;