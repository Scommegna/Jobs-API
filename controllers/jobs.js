const getAllJobs = async (req, res) => {
  res.send("get jobs user");
};

const getJob = async (req, res) => {
  res.send("get job user");
};

const createJob = async (req, res) => {
  res.send(req.user);
};

const updateJob = async (req, res) => {
  res.send("get jobs user");
};

const deleteJob = async (req, res) => {
  res.send("get jobs user");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
