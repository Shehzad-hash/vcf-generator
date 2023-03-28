import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import logo from "../../public/Img/vcf-logo.png";
import logo2 from "../../public/Img/vcf-logo-2.png";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css"
        />
      </Head>

      {/* <!-- Header --> */}
      <div className="customHeader">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <a className="mainLogo" href="#">
                <Image height={80} width={140} src={logo}></Image>
              </a>
            </div>
            <div className="col-lg-5 ms-auto">
              <div className="headerBox"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg customNavbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image height={150} width={200} src={logo2}></Image>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter Agency License"
                  aria-label="Search"
                />
              </li>
              <li className="nav-item ms-0 ms-lg-3 mt-3 mt-lg-0">
                <button className="btn btn-outline-success" type="submit">
                  Buy Agency
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Page Contents --> */}
      <div className="pageContents">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="mainHeading">VCF (vCard File) Generator</h1>
              <p className="mainText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                porro vero quos libero et iure aspernatur ipsa ut quia omnis?
              </p>
              {/* <!-- Accordion 1 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Name</h1>
                <h3 className="hideButton">
                  <label for="switch1"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch1"
                  />
                  <label className="switchLabel" for="switch1">
                    Toggle
                  </label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Prefix
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Prefix"
                    />
                    <label className="commonLabel" for="">
                      First Name
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="First Name"
                    />
                    <label className="commonLabel" for="">
                      Middle Name
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Middle Name"
                    />
                    <label className="commonLabel" for="">
                      Last Name
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Last Name"
                    />
                    <label className="commonLabel" for="">
                      Suffix
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Suffix"
                    />
                    <label className="commonLabel mt-3" for="">
                      Nickname
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Nickname"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 1 End --> */}

              {/* <!-- Accordion 2 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Work</h1>
                <h3 className="hideButton">
                  <label for="switch2"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch2"
                  />
                  <label className="switchLabel" for="switch2"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Organization
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Organization"
                    />
                    <label className="commonLabel" for="">
                      Title
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Title"
                    />
                    <label className="commonLabel" for="">
                      Role
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Role"
                    />
                    <label className="commonLabel" for="">
                      Work URL
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Work URL"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 2 End --> */}

              {/* <!-- Accordion 3 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Emails</h1>
                <h3 className="hideButton">
                  <label for="switch3"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch3"
                  />
                  <label className="switchLabel" for="switch3"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Email
                    </label>
                    <input
                      className="commonInput"
                      type="email"
                      placeholder="Email"
                    />
                    <label className="commonLabel" for="">
                      Work Email
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Work Email"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 3 End --> */}

              {/* <!-- Accordion 4 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Phones</h1>
                <h3 className="hideButton">
                  <label for="switch4"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch4"
                  />
                  <label className="switchLabel" for="switch4"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Home Phone
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Home Phone"
                    />
                    <label className="commonLabel" for="">
                      Work Phone
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Work Phone"
                    />
                    <label className="commonLabel" for="">
                      Cell Phone
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Cell Phone"
                    />
                    <label className="commonLabel" for="">
                      Pager Phone
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Pager Phone"
                    />
                    <label className="commonLabel" for="">
                      Home Fax
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Home Fax"
                    />
                    <label className="commonLabel mt-3" for="">
                      Work Fax
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Work Fax"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 4 End --> */}

              {/* <!-- Accordion 5 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Home Address</h1>
                <h3 className="hideButton">
                  <label for="switch5"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch5"
                  />
                  <label className="switchLabel" for="switch5"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Label
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Label"
                    />
                    <label className="commonLabel" for="">
                      Street
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Street"
                    />
                    <label className="commonLabel" for="">
                      City
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="City"
                    />
                    <label className="commonLabel" for="">
                      State / Province
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="State / Province"
                    />
                    <label className="commonLabel" for="">
                      Postal Code
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Postal Code"
                    />
                    <label className="commonLabel mt-3" for="">
                      Country
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 5 End --> */}

              {/* <!-- Accordion 6 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Work Address</h1>
                <h3 className="hideButton">
                  <label for="switch6"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch6"
                  />
                  <label className="switchLabel" for="switch6"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Label
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Label"
                    />
                    <label className="commonLabel" for="">
                      Street
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Street"
                    />
                    <label className="commonLabel" for="">
                      City
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="City"
                    />
                    <label className="commonLabel" for="">
                      State / Province
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="State / Province"
                    />
                    <label className="commonLabel" for="">
                      Postal Code
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Postal Code"
                    />
                    <label className="commonLabel mt-3" for="">
                      Country
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 6 End --> */}

              {/* <!-- Accordion 7 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Personal</h1>
                <h3 className="hideButton">
                  <label for="switch7"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch7"
                  />
                  <label className="switchLabel" for="switch7"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Birthday
                    </label>
                    <div className="row">
                      <div className="col-lg-4">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Day"
                        />
                      </div>
                      <div className="col-lg-4 my-3 my-lg-0">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Month"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                    <label className="commonLabel" for="">
                      Anniversary
                    </label>
                    <div className="row">
                      <div className="col-lg-4">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Day"
                        />
                      </div>
                      <div className="col-lg-4 my-3 my-lg-0">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Month"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          className="commonInput"
                          type="text"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                    <label className="commonLabel" for="">
                      URL
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="URL"
                    />
                    <label className="commonLabel" for="">
                      Gender
                    </label>
                    <div className="genderDiv">
                      <label for="male">Male</label>
                      <input name="gender" id="male" type="radio" />
                      <label for="female">Female</label>
                      <input name="gender" id="female" type="radio" />
                      <label for="other">Other</label>
                      <input name="gender" id="other" type="radio" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 7 End --> */}

              {/* <!-- Accordion 8 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Images</h1>
                <h3 className="hideButton">
                  <label for="switch8"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch8"
                  />
                  <label className="switchLabel" for="switch8"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Photo
                    </label>
                    <input className="commonInput" type="file" />
                    <label className="commonLabel" for="">
                      Logo
                    </label>
                    <input className="commonInput" type="file" />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 8 End --> */}

              {/* <!-- Accordion 9 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Social</h1>
                <h3 className="hideButton">
                  <label for="switch9"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch9"
                  />
                  <label className="switchLabel" for="switch9"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      LinkedIn
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="LinkedIn"
                    />
                    <label className="commonLabel" for="">
                      Twitter
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Twitter"
                    />
                    <label className="commonLabel" for="">
                      Facebook
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Facebook"
                    />
                    <label className="commonLabel" for="">
                      Instagram
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Instagram"
                    />
                    <label className="commonLabel" for="">
                      Youtube
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="PYoutube"
                    />
                    <label className="commonLabel" for="">
                      Custom
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Custom"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 9 End --> */}

              {/* <!-- Accordion 10 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Other</h1>
                <h3 className="hideButton">
                  <label for="switch10"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch10"
                  />
                  <label className="switchLabel" for="switch10"></label>
                  <div className="accordionContents">
                    <label className="commonLabel mt-3" for="">
                      Note
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="Note"
                    />
                    <label className="commonLabel" for="">
                      UID
                    </label>
                    <input
                      className="commonInput"
                      type="text"
                      placeholder="UID"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 10 End --> */}

              {/* <!-- Accordion 11 Start --> */}
              <div className="toggleContainer">
                <h1 className="accordionHeading">Preview</h1>
                <h3 className="hideButton">
                  <label for="switch11"></label>
                </h3>
                <div className="trainingToggle">
                  <input
                    type="checkbox"
                    className="switch switchInput"
                    id="switch11"
                  />
                  <label className="switchLabel" for="switch11"></label>
                  <div className="accordionContents">
                    <textarea
                      className="commonInput mt-4"
                      placeholder="BEGIN:VCARD VERSION:3.0 FN;CHARSET=UTF-8: N;CHARSET=UTF-8:;;;; REV:2023-03-16T18:26:25.870Z END:VCARD"
                      name=""
                      id=""
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 10 End -->

            <!-- Term Div --> */}
              <div className="termDiv">
                <input id="termCheck" type="checkbox" />
                <label for="termCheck"> I agree to the term of use </label>
              </div>
              <a className="mainBtn my-4" href="#">
                Generate
              </a>
              <div className="borderDiv">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum provident vel delectus pariatur perferendis repellat
                  reiciendis, maiores repudiandae id neque alias minus eos
                  tempore in totam illum iure saepe atque.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mx-auto px-4">
              <div className="previewContainer">
                <h1 className="previewHeading">Live Preview</h1>
                <div className="previewHeader">
                  <a href="#">
                    <i className="fa-solid fa-chevron-left"></i>
                    icloud
                  </a>
                  <a href="#">Edit</a>
                </div>
                <div className="previewUserArea">
                  <i className="fa-regular fa-circle-user"></i>
                  <div className="userName">Your Name</div>
                </div>
                <div className="previewServiceForUser">
                  <a href="#" className="userService">
                    <i className="fa-solid fa-message"></i>
                    <div>Message</div>
                  </a>
                  <a href="#" className="userService">
                    <i className="fa-solid fa-phone"></i>
                    <div>Phone</div>
                  </a>
                  <a href="#" className="userService">
                    <i className="fa-solid fa-video"></i>
                    <div>Video</div>
                  </a>
                  <a href="#" className="userService">
                    <i className="fa-solid fa-envelope"></i>
                    <div>Mail</div>
                  </a>
                  <a href="#" className="userService">
                    <i className="fa-solid fa-dollar-sign"></i>
                    <div>Pay</div>
                  </a>
                </div>
                <div className="userDetails">
                  <div className="blackText">Work</div>
                  <div className="blueText">123-456-5678</div>
                </div>
                <div className="userDetails">
                  <div className="blackText">Home</div>
                  <div className="blueText">your emailtext@gmail.com</div>
                </div>
                <div className="userDetails odd">
                  <div className="blackText">
                    Home <br />
                    123Main Street <br />
                    abc USA
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004086.334105982!2d-104.65739648712889!3d37.27555856333408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1679068206232!5m2!1sen!2s"
                    width="100"
                    height="100"
                    // style="border: 0"
                    // allowfullscreen=""
                    // loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="userDetails">
                  <div className="blackText">Birthday</div>
                  <div className="blueText">5 June</div>
                </div>
                <div className="userDetails">
                  <div className="blackText">Note</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer className="pageFooter">
        <div className="container">
          <p className="copyRightText">
            Copyright: Lorem ipsum dolor sit amet.
          </p>
          <a className="footerLink" href="#">
            Link 1
          </a>
          <a className="footerLink" href="#">
            Link 2
          </a>
          <a className="footerLink" href="#">
            Link 3
          </a>
          <a className="footerLink" href="#">
            Link 4
          </a>
        </div>
      </footer>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
      </Script>
    </>
  );
}
