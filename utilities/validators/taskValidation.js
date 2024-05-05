const Joi = require("joi");


const taskSchema = Joi.object({
  
  title: Joi.string().required().min(2).max(20),
  duration: Joi.number().required().min(1).max(10),

});



module.exports = taskSchema;
