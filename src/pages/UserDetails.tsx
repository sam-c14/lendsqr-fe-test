import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Avatar from "../assests/images/Avatar.svg";
import BackArrow from "../assests/images/BackArrow.svg";
import { MdStarRate } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import { UserDetail } from "../types/globalTypes";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<UserDetail>();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
        .then((info) => info.json())
        .then((data) => {
          setUserDetails(data);
          localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((err) => console.log(err));
    } else {
      const user = JSON.parse(localStorage.getItem("user") || "");
      setUserDetails(user);
    }
    return () => localStorage.clear();
  }, []);

  function addActiveClass(e: React.MouseEvent<HTMLLIElement>) {
    const links = Array.from(
      document.querySelectorAll(".details-tab-nav ul li")
    );
    links.map((link) => {
      link.classList.remove("active-nav-link");
    });
    e.currentTarget.classList.add("active-nav-link");
  }

  return (
    <div className="container">
      <Navbar />
      <div className="dashboard-container" id="users">
        <Sidebar activeClass="users" detailClass={"details-page"} />
        <div className="dashboard">
          <div className="dashboard-content" id="user-content">
            <header>
              <div className="content-1">
                <Link className="home-link" to="/users">
                  <img src={BackArrow} alt="home" />
                  <p>Back to Users</p>
                </Link>
              </div>
              <div className="content-2">
                <div>
                  <h3>User Details</h3>
                </div>
                <div className="content-2-btns">
                  <button className="content-2-btns-reset">
                    blacklist user
                  </button>
                  <button className="content-2-btns-activate">
                    activate user
                  </button>
                </div>
              </div>
            </header>
            <main>
              {
                <>
                  <section>
                    <div className="details-tab">
                      <div className="details-tab-head">
                        <div className="details-tab-head-profile">
                          <div className="details-tab-head-profile-img">
                            <img
                              src={userDetails?.profile.avatar}
                              alt="avatar"
                            />
                          </div>
                          <div className="details-tab-head-profile-info">
                            <div>
                              <h3>
                                {userDetails?.profile.firstName +
                                  " " +
                                  userDetails?.profile.lastName}
                              </h3>
                            </div>
                            <div>
                              <p>{userDetails?.accountNumber}</p>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="details-tab-head-rating">
                          <p>User's Tier</p>
                          <div>
                            <MdStarRate />
                            <MdStarOutline />
                            <MdStarOutline />
                          </div>
                        </div>
                        <hr />
                        <div className="details-tab-head-account">
                          <div className="details-tab-head-account-balance">
                            <h3>
                              {userDetails?.profile.currency +
                                "" +
                                userDetails?.accountBalance}
                            </h3>
                          </div>
                          <div className="details-tab-head-account-bank">
                            <span className="details-tab-head-account-bank-account">
                              {userDetails?.profile.bvn}
                            </span>
                            /
                            <span className="details-tab-head-account-bank-name">
                              Providus Bank
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="details-tab-nav">
                        <ul>
                          <li
                            className="active-nav-link"
                            onClick={(e) => addActiveClass(e)}
                          >
                            General Details
                          </li>
                          <li onClick={(e) => addActiveClass(e)}>Documents</li>
                          <li onClick={(e) => addActiveClass(e)}>
                            Bank Details
                          </li>
                          <li onClick={(e) => addActiveClass(e)}>Loans</li>
                          <li onClick={(e) => addActiveClass(e)}>Savings</li>
                          <li onClick={(e) => addActiveClass(e)}>
                            App and System
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="info">
                      <div className="info-user">
                        <h4>Personal Information</h4>

                        <div className="info-user-data">
                          <div className="info-user-data-full-name">
                            <div className="label">
                              <h6>full name</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.firstName +
                                " " +
                                userDetails?.profile.lastName}
                            </div>
                          </div>
                          <div className="info-user-data-phone-no">
                            <div className="label">
                              <h6>Phone Number</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.phoneNumber}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Email Address</h6>
                            </div>
                            <div className="value">{userDetails?.email}</div>
                          </div>
                          <div className="info-user-data-bvn">
                            <div className="label">
                              <h6>Bvn</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.bvn}
                            </div>
                          </div>
                          <div className="info-user-data-gender">
                            <div className="label">
                              <h6>Gender</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.gender}
                            </div>
                          </div>
                          <div className="info-user-data-marital-status">
                            <div className="label">
                              <h6>Marital status</h6>
                            </div>
                            <div className="value">Single</div>
                          </div>
                          <div className="info-user-data-children">
                            <div className="label">
                              <h6>Children</h6>
                            </div>
                            <div className="value">None</div>
                          </div>
                          <div className="info-user-data-residence-type">
                            <div className="label">
                              <h6>Type of residence</h6>
                            </div>
                            <div className="value">Parents Apartment</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-user">
                        <h4>Education and Employment</h4>

                        <div className="info-user-data" id="edu">
                          <div className="info-user-data-full-name">
                            <div className="label">
                              <h6>level of education</h6>
                            </div>
                            <div className="value">
                              {userDetails?.education.level}
                            </div>
                          </div>
                          <div className="info-user-data-phone-no">
                            <div className="label">
                              <h6>employment status</h6>
                            </div>
                            <div className="value">
                              {userDetails?.education.employmentStatus}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>sector of employment</h6>
                            </div>
                            <div className="value">
                              {userDetails?.education.sector}
                            </div>
                          </div>
                          <div className="info-user-data-bvn">
                            <div className="label">
                              <h6>Duration of employment</h6>
                            </div>
                            <div className="value">
                              {userDetails?.education.duration}
                            </div>
                          </div>
                          <div className="info-user-data-gender">
                            <div className="label">
                              <h6>office email</h6>
                            </div>
                            <div className="value">
                              {userDetails?.education.officeEmail}
                            </div>
                          </div>
                          <div className="info-user-data-marital-status">
                            <div className="label">
                              <h6>Monthly income</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.currency +
                                "" +
                                userDetails?.education.monthlyIncome[0] +
                                "-" +
                                userDetails?.profile.currency +
                                "" +
                                userDetails?.education.monthlyIncome[1]}
                            </div>
                          </div>
                          <div className="info-user-data-children">
                            <div className="label">
                              <h6>loan repayment</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.currency +
                                "" +
                                userDetails?.education.loanRepayment}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-user">
                        <h4>Socials</h4>

                        <div className="info-user-data">
                          <div className="info-user-data-full-name">
                            <div className="label">
                              <h6>Twitter</h6>
                            </div>
                            <div className="value">
                              {userDetails?.socials.twitter}
                            </div>
                          </div>
                          <div className="info-user-data-phone-no">
                            <div className="label">
                              <h6>Facebook</h6>
                            </div>
                            <div className="value">
                              {userDetails?.socials.facebook}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Instagram</h6>
                            </div>
                            <div className="value">
                              {userDetails?.socials.instagram}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-user">
                        <h4>Guarantor</h4>

                        <div className="info-user-data">
                          <div className="info-user-data-full-name">
                            <div className="label">
                              <h6>full Name</h6>
                            </div>
                            <div className="value">
                              @
                              {userDetails?.guarantor.firstName +
                                " " +
                                userDetails?.guarantor.lastName}
                            </div>
                          </div>
                          <div className="info-user-data-phone-no">
                            <div className="label">
                              <h6>Phone Number</h6>
                            </div>
                            <div className="value">
                              {userDetails?.guarantor.phoneNumber.split("x")[0]}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Email Address</h6>
                            </div>
                            <div className="value">
                              {userDetails?.guarantor.address}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Relationship</h6>
                            </div>
                            <div className="value">
                              {userDetails?.guarantor.gender === "Male"
                                ? "Brother"
                                : "Sister"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-user last-info">
                        <h4 className="opacity-0">Info</h4>

                        <div className="info-user-data">
                          <div className="info-user-data-full-name">
                            <div className="label">
                              <h6>full Name</h6>
                            </div>
                            <div className="value">
                              {userDetails?.profile.firstName +
                                " " +
                                userDetails?.profile.lastName}
                            </div>
                          </div>
                          <div className="info-user-data-phone-no">
                            <div className="label">
                              <h6>Phone Number</h6>
                            </div>
                            <div className="value">
                              {userDetails?.phoneNumber.split("x")[0]}
                            </div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Email Address</h6>
                            </div>
                            <div className="value">{userDetails?.email}</div>
                          </div>
                          <div className="info-user-data-email">
                            <div className="label">
                              <h6>Relationship</h6>
                            </div>
                            <div className="value">Sister</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              }
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
