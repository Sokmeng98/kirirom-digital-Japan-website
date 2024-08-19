import Head from "next/head";

export default function Investment() {
  return (
    <>
      <Head>
        <title>Investment | Kirirom Digital</title>
      </Head>
      <div className="bg-kd-primary">
        <div className="py-5"></div>
        <div className="container text-kd-white py-4 px-3">
          <h3 className="text-start px-3">Grow Together With Us</h3>
        </div>
      </div>
      <div className="bg-kd-secondary py-5">
        <div className="py-md-5"></div>
        <div className="container px-4 font-size-20">
          <ol style={{ paddingRight: "1.5rem", textAlign: "justify" }}>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Company Overview:</span>&nbsp; A brief
              description of the company, its products or services, and its
              target market.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Financial Performance:</span>&nbsp;
              Information about the company's revenue, profits, and growth over
              the past few years. This may also include information about any
              debt or equity financing the company has received.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Competitive Landscape:</span>&nbsp;
              Analysis of the company's position within its industry, including
              its competitors and market share.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Management Team:</span>&nbsp;
              Information about the company's leadership team, their experience,
              and their track record of success.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Industry Trends:</span>&nbsp;Analysis of
              the current state of the industry in which the company operates,
              including any emerging trends or challenges.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Risk Factors:</span>&nbsp;Discussion of
              any potential risks to the company's future success, such as
              regulatory changes or competitive threats.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Future Growth Prospects:</span>
              &nbsp;Discussion of the company's future growth potential,
              including any plans for expansion or new product development.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Corporate Governance:</span>
              &nbsp;Information about the company's corporate governance
              practices, including board structure and executive compensation.
            </li>
            <li className="py-1 py-md-2">
              <span className="fw-bold">Social Responsibility:</span>
              &nbsp;Information about the company's commitment to social
              responsibility, including any environmental or social initiatives.
            </li>
          </ol>
        </div>
        <div className="py-md-5"></div>
      </div>
    </>
  );
}
