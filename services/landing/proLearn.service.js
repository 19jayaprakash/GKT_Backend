const ProLearn = require('../../models/landing/ProLearn'); 
const createProgram = async (data) => {
  return await ProLearn.create(data);
};

const getAllPrograms = async () => {
  return await ProLearn.findOne({});
};

const getProgramById = async (id) => {
  return await ProLearn.findById(id);
};


const addCourse = async (programId, courseData) => {
  return await ProLearn.findByIdAndUpdate(
    programId,
    { $push: { courses: courseData } },
    { new: true, runValidators: true } 
  );
};

const removeCourse = async (programId, courseCustomId) => {
  return await ProLearn.findByIdAndUpdate(
    programId,
    { $pull: { courses: { id: courseCustomId } } },
    { new: true }
  );
};

module.exports = {
  createProgram,
  getAllPrograms,
  getProgramById,
  addCourse,
  removeCourse
};