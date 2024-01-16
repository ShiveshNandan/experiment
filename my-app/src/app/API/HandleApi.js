import axios from "axios"

const URL = "https://main-project-4ph5.vercel.app/" 

const allCourses = async (setCourses) => {
    axios
    .get(URL)
    .then(({data}) => {
        setCourses(data);
    })
}

export {allCourses}