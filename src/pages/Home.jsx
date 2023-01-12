import HeaderBanner from "../components/HeaderBanner";
import webappDev from "../assets/webapp-development.png";
import agileTeams from "../assets/agile-teams.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <section className="text-center bg--secondary">
        <div className="container">
          <div id="main-content" className="row main-title">
            <div className="heading-block">
              <h1>Our Services</h1>
            </div>
            <p className="lead">
              We are a SaaS product development company. With us, you leverage
              our expertise to build world class products.
            </p>
          </div>
        </div>
      </section>
      <section className="feature-large switchable bg--secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6 center">
              <img
                alt="webapp development"
                className="webdev-img"
                src={webappDev}
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="heading-block">
                <h2>Web App Development</h2>
              </div>
              <div className="text-block">
                <h5>Expertise</h5>
                <p>
                  We understand the nuances of building successful SaaS web
                  stack such as multi - tenancy, feature flags, i18n / l10n,
                  role - based access, security compliance, and more.&nbsp;
                </p>
              </div>
              <div className="text-block">
                <h5>Approach</h5>
                <p>
                  We focus on establishing an effective team and processes to
                  develop a sustainable product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-large switchable switchable--switch bg--secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6 center">
              <img
                alt="Agile Dev Teams"
                className="responsive-img"
                src={agileTeams}
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="heading-block">
                <h2>Agile Developing Teams</h2>
              </div>
              <div className="text-block">
                <h5>Full range of skillsets</h5>
                <p>
                  Building a successful product requires a range of skillsets
                  and specializations. Our Agile Teams are the simplest way to
                  bootstrap, scale and sustain any Web App / SaaS development
                  needs.
                </p>
              </div>
              <div className="text-block">
                <h5>Mature processes</h5>
                <p>
                  You leverage not only our mature processes but decades of
                  experience building such products at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
