
import { contactSection } from '../data/ContactSection'
import '../style/Contact.css'
import parse from 'html-react-parser'


function Contact() {
  return (
    <div id="contact">
        <div class="wrapper">
            <div class="footer">
                
                    {
                        contactSection.map((item)=> (
                            <div className="footer-section" key={item.id}>
                                {parse(item.title)}
                                {parse(item.description)}
                            </div>
                        ))
                    }



            </div>
        </div>
    </div>
  )
}

export default Contact