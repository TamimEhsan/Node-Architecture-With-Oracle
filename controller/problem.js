const Controller = require('./base').Controller;
const ProblemService = require('../service/problem').ProblemService;
class ProblemController extends Controller{
    constructor() {
        super();
    }
    recent = async (req,res,next)=>{
        let problemService = new ProblemService();
        let problems = await problemService.recent();
        if( !problems.length ){
            res.status(204).json({code: "E0001", description: "No problem found."});
        }else res.status(200).json(problems);
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


exports.ProblemController = ProblemController;