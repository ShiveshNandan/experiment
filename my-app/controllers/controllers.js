// const course = require("../schema/course")
const Course = require("../schema/course")

module.exports.getCourses = async (req,res) => {
     const courses = await Course.find()
     res.send(courses)
}

module.exports.uploadCourses = async (req,res) => {
    const {subject,course,id,notes,playlist,pyq,book} = req.body;
    Course.create({subject,course,id,notes,playlist,pyq,book})
    // res.send("uploaded")
    .then((data) => {
        console.log("added successfully");
        console.log(data);
        res.send(data);
    })
    .catch((err) => console.log(err))
}





// ================== second way to post data =============================

// module.exports.uploadCourses = async (req,res) => {
//     console.log("inside the post function")
//      const data = ({
//          subject: req.body.subject,
//          id: req.body.id,
//         notes : req.body.notes,
//         playlist: req.body.playlist,
//         pyq: req.body.pyq,
//         book: req.body.book
//      });
//     Course.create(data)
//     res.send("uploaded")
// }



