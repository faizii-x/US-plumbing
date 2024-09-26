import Tab1 from "../public/png/tab1.png";
import Tab2 from "../public/png/tab2.png";
import Tab3 from "../public/png/tab3.png";
import STAR from "../public/png/yellowStar.png";
import Man1 from "../public/png/man1.png";
import Man2 from "../public/png/man2.png";
import Man3 from "../public/png/man3.png";

const customTabs = [
  {
    heading: "All",
    img: [Tab1, Tab1, Tab1, Tab1, Tab1, Tab1],
  },
  {
    heading: "Residential",
    img: [Tab2, Tab2, Tab2, Tab2, Tab2, Tab2],
  },
  {
    heading: "Commerical",
    img: [Tab3, Tab3, Tab3, Tab3, Tab3, Tab3],
  },
];

export default customTabs;

const CLIENT_REVIEWS_DATA = [
  {
    img: STAR,
    para: "“Simply the best. Better than all the rest. I’d recommend A1 plumbing service  they are best in the market”",
    imgMan: Man1,
    name: "Jacob Jones",
    designation: "Digital Marketer",
    stars: 5,
  },
  {
    img: STAR,
    para: "“A1 plumbing service provides high-quality work, quick response times, transparent pricing, and professional customer service”",
    imgMan: Man2,
    name: "Michael Stark",
    designation: "Designer",
    stars: 4,
  },
  {
    img: STAR,
    para: "“I recently hired A1 Plumbing for a major plumbing issue at my home, and I couldn't be more satisfied with their service! From the moment I called, their team was prompt, professional, and courteous”",
    imgMan: Man3,
    name: "Johnsons John",
    designation: "Operation Manager",
    stars: 5,
  },
  {
    img: STAR,
    para: "“I recently hired A1 Plumbing for a major plumbing issue at my home, and I couldn't be more satisfied with their service! From the moment I called, their team was prompt, professional, and courteous”",
    imgMan: Man3,
    name: "Johnsons John",
    designation: "Operation Manager",
    stars: 5,
  },
];
export { CLIENT_REVIEWS_DATA };
