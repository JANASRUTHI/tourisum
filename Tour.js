import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Apps.css";
// import tours from "../components/Package";
import imgCard1 from "./img1.jpg";
import imgCard2 from "./img2.jpg";
import imgCard3 from "./img-card (3).jpg";
import imgCard4 from "./img4.jpg";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Mysore palace</h1>
        <h4>palace</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              Mysore Palace is a priceless national treasure and the pride of a kingdom, the Mysore Maharaja Palace 
              is the seat of the famed Wodeyar Maharajas of Mysore. The palace is now converted into a museum that 
              treasures souvenirs, paintings, jewelry, royal costumes, and other items, which were once possessed by
               the Wodeyars. It's a kaleidoscope of stained glass  mirrors. The tastefully decorated and intricately
                carved doors open into luxuriously decorated rooms. The ground floor with an enclosed courtyard displays
                 costumes, musical instruments, children's toys, and numerous portraits. The upper floor has a small 
                 collection of weapons. The beautifully carved mahogany ceilings, solid silver doors, white marble floors, 
                 and superb columned Durbar Hall are a feast to the eyes. The palace is a treasure house of exquisite carvings and works of art from all over the world. Exquisitely carved doors open into stunningly luxurious rooms. 
              The front of the Amba Vilas Palace has an open balcony supported by massive circular columns.
              The Royal portrait gallery, which is of historical importance, is a visual treat to the visitors.
               This three-storied structure has beautifully designed square towers at various cardinal points covered by
                domes.
              </p>
              <p>
              The Mysore Palace complex has a selection of twelve Hindu temples. 
              The oldest of these was built in the 14th century, while the most recent was built in 1953.
               Someshvara Temple, dedicated to God Lord Shiva, and Lakshmiramana Temple,
               dedicated to God Lord Vishnu are some of the more famous temples.
               The erstwhile Royal family continues to live in a portion of the Palace. Yaduveer Krishnadatta Chamaraja Wadiyar is the twenty-seventh head of the erstwhile ruling family of the Kingdom of Mysore and head of the Wadiyar dynasty. 
               Although he has no official title or role, he is known as Maharaja of Mysore.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery" >
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container><br></br><br></br>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;