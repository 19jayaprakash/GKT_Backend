const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true 
  }, 
  title: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  }, 
  description: { 
    type: String, 
    required: true 
  },
  duration: { 
    type: String, 
    required: true 
  },
    isActive: { 
    type: Boolean, 
    default: true 
  }
},{ _id: false });

const ProLearnSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  courses: [CourseSchema]
}, {
  timestamps: true 
});


module.exports = mongoose.model('ProLearn', ProLearnSchema);