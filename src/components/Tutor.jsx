import { tutorList, tutorSection } from "../data/TutorSection"
import parse from 'html-react-parser'

function Tutor() {
  return (
    <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>

                <div className="tutor-list">
               {
                tutorList.map((item) => (
                <div className="kartu-tutor" key={item.id}>
                    <img src={item.image} alt={parse(item.name)}/>
                    <p>{parse(item.name)}</p>
                </div>
                ))
               }

                </div>
            </div>
        </section>
  )
}

export default Tutor