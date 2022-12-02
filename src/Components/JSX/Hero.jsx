import "../CSS/styles.css";
import Diamond from "../img/diamond2.png";
import Arrow from "../img/arrow.png";
import Star from "../img/star.png";
import Student from "../img/student.png";
import Heart from "../img/heart.png";

function Hero() {
  return (
    <main>
      <div className="d-flex justify-content-between">
        <section className="service">
          <h1 className="service-title">Tutoring Done Right</h1>
          <span>Private in-person & Online tutoring</span>
          <aside className="about-service">
            If you want to learn an academic subject or study for an exam, we
            want to be the company you choose. Our tutors are bright and
            enthusiastic and seek out to bring the best of an individual
            learners potential in both academics and live.
          </aside>
          <button className="btn book-btn">Book a Session</button>
        </section>
        <section className="float-end ">
          <div className="rectangle position-absolute">
            <div className="student position-absolute">
              <img src={Student} alt="Student" className="stud-img" />
            </div>
          </div>
        </section>
      </div>
      <section className="hero">
        <h1>Why you should choose us</h1>
        <aside>
          <span>
            We love tutoring and we value the student's process. Our tutors
            focus on each
          </span>
          <br />
          <span>
            individual student and tailor the lessons around how s/he learns
            best.
          </span>
        </aside>
      </section>
      <div className="d-flex justify-content-center p-5 why-sect">
        <div className="card py-3 mx-3 shadow border-0" id="card">
          <img
            src={Diamond}
            className="card-img-top "
            alt="..."
            id="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">Well-Vetted Tutors</h5>
            <p className="card-text">
              Our tutors are highly qualified, passionate, and well-educated at
              top universities.
            </p>
          </div>
        </div>
        <div className="card py-3 mx-3 shadow border-0" id="card">
          <img src={Arrow} className="card-img-top " alt="..." id="card-img" />
          <div className="card-body">
            <h5 className="card-title">We Come to You</h5>
            <p className="card-text">
              We meet at the pupil's home or local library and we also offer
              online lessons.
            </p>
          </div>
        </div>
        <div className="card py-3 mx-3 ms-1 shadow border-0" id="card">
          <img src={Star} className="card-img-top " alt="..." id="card-img" />
          <div className="card-body">
            <h5 className="card-title">Your Future</h5>
            <p className="card-text">
              We share knowledge that can help in all areas of life, not just
              the subject/s we are focusing on.
            </p>
          </div>
        </div>
        <div className="card py-3 whylast shadow border-0" id="card">
          <img src={Heart} className="card-img-top " alt="..." id="card-img" />
          <div className="card-body">
            <h5 className="card-title">We Love Effort</h5>
            <p className="card-text">
              The growth mindset is a lifelong asset. The result isn't nearly as
              important as the effort.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;