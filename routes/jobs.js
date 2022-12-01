const express = require("express");
const router = express();

const {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:jobId").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
