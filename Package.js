import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "./Apps.css";
import imgCard1 from "./img1.jpg";
import imgCard2 from "./img2.jpg";
import imgCard3 from "./img3.jpg";
import imgCard4 from "./img4.jpg";
import imgCard5 from "./img5.jpg";
import imgCard6 from "./img6.jpg";
import imgCard7 from "./img7.jpg";
import imgCard8 from "./img8.jpg";
import imgCard9 from "./img9.jpg";
import imgBarobaybay from "./barobaybay.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "hmoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "mysore place",
    subtitle: "mysore zoo"
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "karanji lake",
    subtitle: "chamundi hills"
  },
  {
    id: 3,
    category: ["resort", "hmoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "ranganathittu bird sanctuary",
    subtitle: "nanjangud"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "melukote",
    subtitle: "bandipur"
  },
  {
    id: 5,
    category: ["resort", "hmoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "krs dam",
    subtitle: "kukkarahalli lake"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "jaganmohan palace",
    subtitle: "srirangapatna"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "chennaksehava temple",
    subtitle: "brindavan garaden"
  },
  {
    id: 8,
    category: ["hmoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "namdroling monastery",
    subtitle: "srikanteshwaraswany temple"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "shuka vana",
    subtitle: "bonsai garden"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "philomena's cathedral",
    subtitle: "talakad"
  }
];

const itemCategories = [
  "all",
  "torist",
  "places,",
  "resort",
  "climbing areas,",
  "camping,",
  "temples."
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;