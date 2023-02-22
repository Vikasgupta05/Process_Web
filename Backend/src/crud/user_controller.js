
const Student = require("../model/user_model")
const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();



  
router.get("", async (req, res) => {

  try {
    const student = await Student.find().lean().exec(); 
    return res.send(student);

  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).send(student);

  } catch (err) {
    return res.status(500).send(err.message);
  }
});


router.patch("/:id", async (req,res) => {
  try{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    }).lean()
    .exec();
    res.send(student);
  }
  catch(err){
    res.send(err.message);
  }
});

module.exports = router;