import Head from "next/head";
import indexStyles from "./index.module.css";
import whyChooseStyles from "../components/SubPage/Home/WhyChoose.module.css";
import footerStyles from "../components/footer.module.css";

const projects = [
  {
    title: "NFT Trading Platform Development",
    icon: "nft.svg",
  },
  {
    title: "Metaverse (VR) Game Development",
    icon: "metaverse.svg",
  },
  {
    title: "AI Novel Writing Project",
    icon: "ai.svg",
  },
  {
    title:
      "Development of “Think!Think!”, a thinking training app for children",
    icon: "think.svg",
  },
  {
    title: "Cloud-based entry / exit management reception system development",
    icon: "cloud.svg",
  },
  {
    title: "Solar panel slope optimization project",
    icon: "solar_panel.svg",
  },
  {
    title: "Private LTE/5G open source research and implementation evaluation",
    icon: "lte.svg",
  },
  {
    title: "Development of navigation system using GNSS information",
    icon: "navigation.svg",
  },
  {
    title:
      "Online business site development and operation utilizing EC platform",
    icon: "commerce.svg",
  },
];

export default function Collaboration() {
  return (
    <>
      <Head>
        <title>Collaboration | Kirirom Digital</title>
      </Head>
      <div className="bg-kd-primary">
        <div className="py-5"></div>
        <div className="container text-kd-white py-4 px-3">
          <h3 className="text-start px-3">Industry-Academia Collaboration</h3>
        </div>
      </div>
      <div className="bg-kd-secondary py-5">
        <div className="container d-flex flex-column justify-content-center align-items-center px-4">
          <img
            src="/images/collaboration-header.png"
            alt=""
            className="w-full"
            style={{ maxWidth: 1100 }}
          />
          <div className="font-size-16 pt-4">
            In Kirirom Institute of Technology, one of the uniqueness of our
            education is that it provides not only academic but also 3600 hours
            of practical internship for our students. The incubation center
            oversees the managing of 3600 hours of internship experience for KIT
            students. This includes assignments and matching process for
            clients’ project, virtual company management and ad-hoc capability
            training. With this unique mechanism, we have been working on
            software development with many Japanese companies.
            <br />
            <div className="py-1"></div>
            We hire graduate engineers, as well as current students from KIT.
            This allows us to transfer our expertise and knowledge to them,
            while providing them an opportunity to learn on the job. In addition
            to the young engineers, we always ensure that there is a senior
            Japanese project manager with experience in consulting, as well as a
            System Integrator to manage the quality of the project.
            <br />
            <div className="py-1"></div>
            Kirirom Institute of Technology’s network also has a strong support
            network. Very often, we will have experts from different industries
            to participate in our global forum. This will allow companies,
            managers, students, and graduates to interact and work together on
            potential projects.
          </div>
        </div>
        <div className="container pt-5 px-4">
          <div className="d-flex flex-column align-items-center">
            <h1 className={whyChooseStyles.sectionTitle}>What We Have Done</h1>
            <div className={indexStyles.underline}></div>
          </div>

          <div className="row py-4">
            {projects.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 mx-auto py-4 d-flex flex-column align-items-center text-center"
                key={index}
              >
                <div
                  className="p-4 rounded-circle"
                  style={{ border: "solid 1px #3E82C2" }}
                >
                  <img
                    src={`./icons/projects/${item.icon}`}
                    alt={item.title}
                    width={50}
                  />
                </div>
                <div className={whyChooseStyles.itemSubtitle}>{item.title}</div>
              </div>
            ))}
          </div>

          <div>
            In Kirirom Institute of Technology, we have a huge plot of land,
            9000 hectares, which allow the conducting of demonstration
            experiments such as autonomous driving and drones.
            <br />
            <div className="py-1"></div>
            Kirirom is a city with hundreds of residents, many of whom are
            students. It can also be used for small-scale demonstrations of
            smart city services that are relevant to everyday living. Because it
            offers a well-developed wo-fi environment, such as Wi-Fi and
            accommodation amenities, it is also excellent for industry-academia
            collaboration projects.
          </div>
        </div>

        <br />
        {/* Contact Us */}
        <div
          className={`container px-4 py-3 my-3 d-flex flex-wrap justify-content-center justify-content-md-between align-items-center ${footerStyles.secondFooter}`}
        >
          <div
            className="text-white me-2 text-center mb-2 mb-sm-0"
            style={{ fontSize: 16 }}
          >
            プロダクト開発、開発チームの英語化などお気軽にご連絡ください。
          </div>
          <div className={indexStyles.redButton}>
            <a
              href="https://forms.gle/BjSwLjdNo639nM85A"
              target="_blank"
              style={{ fontSize: 16, whiteSpace: "nowrap" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
