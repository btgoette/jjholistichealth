/* About Team Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const TeamMembers = () => {

  var roster = [
    {
      src: "/images/pages/about/team/krystal-johnson.webp",
      alt: "Krystal Johnson",
      name: "ASA. Krystal Johnson FNTP, CH, CN",
      title:
        "Founder | Functional Nutritional Therapy Practitioner | Holistic Health Practitioner | CH",
      shortText:
        "Krystal is a Functional Nutritional Therapy Practitioner (NTP) and member of the Holistic Entrepreneurs Association as well as the American Association of Drug-less Practitioners.",
      text: [
        {
          p: "Krystal is a Functional Nutritional Therapy Practitioner (NTP) and member of the Holistic Entrepreneurs Association as well as the American Association of Drug-less Practitioners.",
        },
        {
          p: "Krystal is a high-performing individual who follows where her heart leads. She proved herself as she graduated as Valedictorian of her class at the Nutritional Therapy Association, also, top of her class at the University of Maryland and the University of North Carolina. She proved her resilience and business acumen when she became a business owner in Direct Sales at 27 and retired herself from employment when she was just 31 years old. She continued her journey as a businesswoman, business coach, and speaker.",
        },
        {
          p: "A loving wife of her best friend and partner in business, Dwayne Johnson. A nurturing mother to 4 daughters and a bonus mother to 3 other daughters and son. She enjoys working in her passion - treating clients naturally, using holistic approach to healing, considering the whole person – body, mind and spirit.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/dwayne-johnson.webp",
      alt: "Dwayne Johnson",
      name: "Dwayne Johnson",
      title: "Vice President of Marketing",
      shortText:
        "Dwayne Johnson is a true rags to riches story of living the American dream. His humble beginnings of living in the back of a U-haul truck in the unforgiving winter nights of Kansas City to the beaches of the Bahamas and countless destinations most only dream about.",
      text: [
        {
          p: "Dwayne Johnson is a true rags to riches story of living the American dream. His humble beginnings of living in the back of a U-haul truck in the unforgiving winter nights of Kansas City to the beaches of the Bahamas and countless destinations most only dream about. Having once lived a life of uncertainty where he didn’t know where his next meal would come from to driving exotic cars and mentoring hundreds of thousands of aspiring entrepreneurs.",
        },
        {
          p: "He works hard, plays hard and loves providing opportunity and those that may have lost their way in life.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/laurinda-lea.webp",
      alt: "Laurinda Lea",
      name: "Laurinda Lea",
      title:
        "Nutritional Therapy Assistant | Assistant Office Manager | Product & Service Assistant",
      shortText:
        "As a Nutritional Therapy Consultant, Lea views the whole person, inside and out, along with their emotional wellbeing for their health and wellness by helping one gain proper balance in life through a nutritional and holistic approach.",
      text: [
        {
          p: "As a Nutritional Therapy Consultant, Lea views the whole person, inside and out, along with their emotional wellbeing for their health and wellness by helping one gain proper balance in life through a nutritional and holistic approach. She encourages her clients to use food as medicine, along with herbs and supplements for healing.",
        },
        {
          p: "Lea is honored to work with the Pediatric community and their families to see that they gain a healthier self and life the holistic way by implementing new ways of eating and thinking. She works with pediatrics that suffer from digestive, weight, hormonal imbalances, and mental health stability.",
        },
        {
          p: "Studied Early Childhood Education at North Carolina Central University and taught PreSchool for 10 years. Studied within the medical field at Wake Tech College and has been a pediatric medical professional for 7 years. She is passionate about teaching health and wellness to the pediatric community and their families about living a healthier lifestyle through goals and helping them reach those goals collaboratively. She is a proud mother of a 17-year-old son who has been both her teacher and student when it comes to the holistic way of life and lifestyle.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/dr-jenna-butler.webp",
      alt: "Dr. Jenna Johnson-Butler",
      name: "Dr. Jenna Johnson-Butler, MD",
      title: "Lab Specialist",
      shortText:
        "A highly dedicated, hardworking, and empathetic physician, Dr. Jenna Butler She went to Dalhousie University in Halifax, Nova Scotia, where she obtained a BSc in Biology. After  completing her studies in Canada, she worked as a Health and General Science teacher.",
      text: [
        {
          p: "A highly dedicated, hardworking, and empathetic physician, Dr. Jenna Butler She went to Dalhousie University in Halifax, Nova Scotia, where she obtained a BSc in Biology. After  completing her studies in Canada, she worked as a Health and General Science teacher, putting a pause on her dreams to practice medicine. She completed her medical studies at the University of the West Indies with a Bachelor of Medicine and Bachelor of Surgery.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/shy-aguila.webp",
      alt: "Shy Aguila",
      name: "Shy Aguila",
      title:
        "Office Manager | Executive Assistant | Product & Service Director",
      shortText:
        "Shy is multi-faceted corporate professional who essentially loves working with people. She holds a Bachelor of Arts in Communication Arts and enjoys extensive experience working in fields such as: media, layout and design, customer service and technical support.",
      text: [
        {
          p: "Shy is multi-faceted corporate professional who essentially loves working with people. She holds a Bachelor of Arts in Communication Arts and enjoys extensive experience working in fields such as: media, layout and design, customer service and technical support.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/miajah-johnson.webp",
      alt: "Miajah Johnson",
      name: "Miajah Johnson",
      title:
        "Virtual Nutritional Therapy Assistant | Product & Service Manager",
      shortText:
        "Miajah Johnson is a budding health professional whose work ethic, passion, and ambition have landed her at J&J Holistic Nutritional Therapy. At the age of 19, Miajah held the post of Virtual Assistant. She is an exceptional student and has made the Dean's List.",
      text: [
        {
          p: "Miajah Johnson is a budding health professional whose work ethic, passion, and ambition have landed her at J&J Holistic Nutritional Therapy. At the age of 19, Miajah held the post of Virtual Assistant. She began her Post-Secondary studies at Northern Lights pursuing a Bachelor's degree in Science but transferred to Arizona State University where she continues to strive for excellence in her studies. She is an exceptional student and has made the Dean's List. Miajah earned the position of Vice President of a Pre-med Association at her university. Miajah has a commendable number of feathers on her cap and more importantly, she is ready to cause ripples in the medical field through her exemplary work. Through her impressive performance, teamwork, leadership qualities, and dedication, Miajah now at the age of 20 has been promoted to Assistant Manager.",
        },
        {
          p: "She volunteered at a hospital back in high school where she got to see the extraordinary work in the hospital. With time management she plans to do some shadowing to different medical specialties to get a feel of what sparks her interest. The specialty she has her eye on is neurology but cardiothoracic is following closely behind, so shadowing will allow her to broaden her idea of different specialties and what they are all about. Miajah plans to take the MCAT next year because in the following year she will be attending medical school.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/aamya-clement-johnson.webp",
      alt: "Aamya Clement Johnson",
      name: "Aamya Clement Johnson",
      title: "Receptionist",
      shortText:
        "Aamya is an up and coming, hard-working student and athlete. What sets this young soul apart from the crowd is her unmatched work ethic, ambition and good will.",
      text: [
        {
          p: "Aamya is an up and coming, hard-working student and athlete. What sets this young soul apart from the crowd is her unmatched work ethic, ambition and good will.",
        },
        {
          p: "As a high-school junior, Aamya plays varsity volleyball for her school’s team as a libero/DS and outside hitter. She has managed to bag a number of trophies even though she is among the shortest in the team. She is also involved in athletics. It is worth noting that Aamya is very competitive, especially when it comes to athletics and life in general. As a result, she is able to consistently outperform her peers. Besides school and sports, Aamya is also a certified sneakerhead. Yes, she is that girl who rocks her prom dress with high-tops.",
        },
        {
          p: "After finishing her high-school education, she intents to attend either UCLA or Pepperdine University in California where she will spend the next 4 years studying criminology. After her first degree, she wishes to advance into MIT or Harvard to further perfect her craft. Ultimately, Aamya plans to join the FBI or BAU.",
        }
      ]
    },
    {
      src: "/images/pages/about/team/taragan-kennedy.webp",
      alt: "Taragan Kennedy",
      name: "Taragan Kennedy",
      title: "Receptionist | Filing Clerk",
      shortText:
        "Taragan Kennedy is an outgoing personality whose sunny disposition is ready to greet you  whether you are giving us a call or coming into the office.",
      text: [
        {
          p: "Taragan Kennedy is an outgoing personality whose sunny disposition is ready to greet you  whether you are giving us a call or coming into the office.",
        },
        {
          p: "Taragan is family-oriented. She is a kind soul who values her ability to help someone have a better day. She is a music connoisseur, loves finding new places to eat, and travels with her best friend.",
        }
      ]
    }
  ];

  return (
    <section className="jj-team">
      <Container>
        <Row>
          {roster.map(({ src, alt, name, title, text }, i) => (
            <Col lg={6} key={i} data-aos="fade-up">
              <div
                itemScope
                itemType="https://schema.org/Person"
                className="about-team-member"
              >
                <div className="d-block text-center d-lg-flex text-lg-start align-items-center">
                  <figure className="about-team-photo">
                    <LazyLoadImage src={src} alt={alt} />
                  </figure>
                  <div className="about-team-title">
                    <h2 itemProp="name" className="about-team-name">
                      {name}
                    </h2>
                    <p itempProp="jobTitle" className="about-team-job-title">
                      {title}
                    </p>
                  </div>
                </div>
                <div className="about-team-content">
                  {text.map(({ p }, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMembers;
