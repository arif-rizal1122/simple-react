import { courseSection } from "../data/CourseSection"
import '../style/Tutor.css'
import parse from 'html-react-parser'


function Course() {
  return (
    <section id="courses">
            <div class="kolom">
            {parse(courseSection.content)}    
            </div>
            <img src={courseSection.image}/>
    </section>
  )
}

export default Course