import express from "express";
import axios from "axios";
import { resumeSchema } from "./resumeModel.js";

const app = express();
app.use(express.json());

app.post("/submit-resume", async (req, res) => {
  try {
    const resume = req.body;

    // Validate the resume (e.g., check required fields)
    if (!resume.name || !resume.email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Forward to n8n webhook
    const response = await axios.post(
      "https://layerland.app.n8n.cloud/webhook-test/resume-submission",
      resume
    );

    res.status(200).json({ message: "Resume submitted successfully", data: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit resume", details: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
