import { partnerList, partnerSection } from '../data/PartnerSection'
import { tutorList } from '../data/TutorSection'
import '../style/Partner.css'
import parse from 'html-react-parser'

function Partner() {
  return (
    <section id="partners">
    <div class="tengah">
        <div class="kolom">
           { parse(partnerSection.content) }
        </div>

        <div className="partner-list">
        {
            partnerList.map((item) => (
            <div className="kartu-partner" key={item.id}>
                <img src={item.image}/>
            </div>
            ))

        }
        </div>

    </div>
</section>
  )
}

export default Partner