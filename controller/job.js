const Controller = require('./base').Controller;
const JobRepository = require("../repository/job").JobRepository;
const jobRepository = new JobRepository();

class JobController extends Controller {
    constructor() {
        super();
    }

    list = async (req, res, next) => {
        let jobs = await jobRepository.findAll();
        if (!jobs.success)
            return res.status(500).json({code: "E0001", description: "Internal Error"});
        else
            return res.status(200).json(jobs.data);
    };
    fetch = async (req, res, next) => {
        let id = req.params.id;
        let job = await jobRepository.findOne(id);
        if (!job.success)
            return res.status(404).json({code: "E0002", description: "Internal Server Error"});
        else if (job.data.length === 0)
            return res.status(500).json({code: "E0002", description: "Employee with id:" + id + " not found."});
        else
            return res.status(200).json(job.data[0]);
    };
};


exports.JobController = JobController;