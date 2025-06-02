const resumeSchema = {
  name: String,
  email: String,
  experience: [
    {
      company: String,
      role: String,
      duration: String,
    },
  ],
  skills: [String],
};

export default resumeSchema;
