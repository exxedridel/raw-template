import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import ImageWww from "../assets/www.png";
import ImageResponsive from "../assets/responsive.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <section className="text-center bg--secondary">
        <div className="container">
          <div className="row">
            <div className="heading-block">
              <h1>Our Services</h1>
            </div>
            <p>
              We are a SaaS product development company. With us, you leverage
              our expertise to build world class products.
            </p>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6 col-md-6 center">
            {" "}
            <img alt="Image" className="webdev-img" src={ImageWww} />{" "}
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="heading-block">
              <h2>Web App Development</h2>
            </div>
            <div class="text-block">
              <h5>Expertise</h5>
              <p>
                {" "}
                We understand the nuances of building successful SaaS web stack
                such as multi - tenancy, feature flags, i18n / l10n, role -
                based access, security compliance, and more.&nbsp;
              </p>
            </div>
            <div class="text-block">
              <h5>Approach</h5>
              <p>
                {" "}
                We focus on establishing an effective team and processes to
                develop a sustainable product.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="feature-large switchable switchable--switch bg--secondary">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-md-6 center">
              {" "}
              <img
                alt="Image"
                class="responsive-img"
                src={ImageResponsive}
              />{" "}
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="heading-block">
                <h2>Agile Dev Teams</h2>
              </div>
              <div class="text-block">
                <h5>Full range of skillsets</h5>
                <p>
                  {" "}
                  Building a successful product requires a range of skillsets
                  and specializations. Our Agile Teams are the simplest way to
                  bootstrap, scale and sustain any Web App / SaaS development
                  needs.{" "}
                </p>
              </div>
              <div class="text-block">
                <h5>Mature processes</h5>
                <p>
                  {" "}
                  You leverage not only our mature processes but decades of
                  experience building such products at scale.{" "}
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
