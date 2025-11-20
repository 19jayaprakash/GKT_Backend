const proLearnService = require('../../services/landing/proLearn.service');

const createProgram = async (req, res) => {
  try {
    const program = await proLearnService.createProgram(req.body);
    res.status(201).json({ success: true, data: program });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getPrograms = async (req, res) => {
  try {
    const programs = await proLearnService.getAllPrograms();
    res.status(200).json({ success: true, data: programs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addCourse = async (req, res) => {
  try {
    const { id } = req.params; // The ProLearn parent ID
    const courseData = req.body; // The new course object

    const updatedProgram = await proLearnService.addCourse(id, courseData);

    if (!updatedProgram) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }

    res.status(200).json({ success: true, data: updatedProgram });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id, courseId } = req.params; // id = Program ID, courseId = "GKT012"

    const updatedProgram = await proLearnService.removeCourse(id, courseId);

    if (!updatedProgram) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }

    res.status(200).json({ success: true, data: updatedProgram });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createProgram,
  getPrograms,
  addCourse,
  deleteCourse
};