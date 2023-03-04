import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ActiveUsers from "../assests/images/ActiveUsers.svg";
import LoanedUsers from "../assests/images/LoanedUsers.svg";
import SavingsUsers from "../assests/images/SavingsUsers.svg";
import TotalUsers from "../assests/images/TotalUsers.svg";
import { BsThreeDotsVertical, BsEye } from "react-icons/bs";
import { TfiAngleDown, TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import UserCheck from "../assests/images/user-check.svg";
import UserTimes from "../assests/images/user-times.svg";
import UserBar from "../assests/images/UserBar.svg";
import { Link } from "react-router-dom";
import { Card, User } from "../types/globalTypes";
import { filterUsers, hideFilter, showFilter } from "../mixins/FilterUsers";
import FilterModal from "../modals/FilterModal";
import { changePages } from "../mixins/TogglePages";
import OptionsModal from "../modals/OptionsModal";
import React from "react";

class Users extends React.Component {
  cards: Card = [
    {
      src: TotalUsers,
      title: "Users",
      count: "2,453",
    },
    {
      src: ActiveUsers,
      title: "active users",
      count: "2,453",
    },
    {
      src: LoanedUsers,
      title: "users with loans",
      count: "12,453",
    },
    {
      src: SavingsUsers,
      title: "users with savings",
      count: "102,453",
    },
  ];

  state: User = {
    users: [],
    isLoading: true,
    tempUserArr: [],
    prevPageCount: 0,
    nextPageCount: 9,
    pageCount: 1,
    isFiltered: false,
    totalPages: 0,
    tableRows: 9,
    error: "",
  };
  tempUserDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  optionsBtnRef = React.createRef<HTMLSpanElement>();
  containerRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    document.documentElement.classList.add("disable-scroll");
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      .then((info) => info.json())
      .then((data) => {
        const totalPages = Math.ceil(
          this.state.users.length / this.state.tableRows
        );
        this.setState({ users: data });
        this.setState({ isLoading: false });
        this.setState({
          tempUserArr: this.state.users.slice(
            this.state.prevPageCount,
            this.state.nextPageCount
          ),
        });
        this.setState({ totalPages: totalPages });
      })
      .catch((err) => {
        this.setState({ error: err.message });
        console.log(err.message);
      });
  }
  componentWillUnmount() {
    document.documentElement.classList.remove("disable-scroll");
  }

  closeOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    const optionsBtns: Element[] = Array.from(
      document.getElementsByClassName("options-btn")
    );

    optionsBtns.map((btn) =>
      e.target === btn.firstElementChild ||
      e.target === btn.nextElementSibling ||
      e.target === btn.nextElementSibling?.firstElementChild ||
      e.target ===
        btn.nextElementSibling?.firstElementChild?.nextElementSibling ||
      e.target === btn.nextElementSibling?.lastElementChild
        ? ""
        : btn.nextElementSibling?.classList.remove("block")
    );
  };

  checkPageCount = (pageCount: number) =>
    pageCount <= this.state.totalPages
      ? this.setState({ pageCount: pageCount })
      : "";

  showOptions(e: React.MouseEvent<HTMLSpanElement>) {
    e.currentTarget.nextElementSibling?.classList.add("block");
  }

  filterProp = () => {
    return this.element;
  };

  element = this;

  changePages(mixinThis: Users, e: React.MouseEvent<HTMLDivElement>) {}
  filterUsers(Users: Users, e: React.MouseEvent<HTMLButtonElement>) {}

  resetUsers = (e: React.MouseEvent<HTMLButtonElement>) => {
    hideFilter(e);
    this.setState({ isFiltered: true });
    const filter = document.querySelector(".filter") as HTMLDivElement;
    filter.classList.remove("filter-alt");
    this.setState({
      tempUserArr: this.state.users.slice(
        this.state.prevPageCount,
        this.state.nextPageCount
      ),
    });
  };

  setTable = (count: number) => {
    const counter = count;
    this.setState({ prevPageCount: 0 });
    this.setState({ nextPageCount: counter });
    this.setState({ tableRows: counter }, () => {
      this.setState(
        {
          totalPages: Math.ceil(this.state.users.length / this.state.tableRows),
        },
        () => {
          this.setState({ tempUserArr: this.state.users.slice(0, counter) });
        }
      );
    });
    const filter = document.querySelector(".filter") as HTMLDivElement;
    this.adjustFilter(counter, filter);
  };

  adjustFilter = (count: number, filter: HTMLDivElement) =>
    count <= 5
      ? filter.classList.add("filter-alt")
      : filter.classList.remove("filter-alt");
  setTableRows = (e: React.FocusEvent<HTMLInputElement>) =>
    typeof parseInt(e.currentTarget.value) === "number"
      ? this.setTable(parseInt(e.currentTarget.value))
      : console.log("set");

  render() {
    return (
      <div
        onClick={this.closeOptions}
        ref={this.containerRef}
        className="container"
      >
        <Navbar />
        <div className="dashboard-container">
          <Sidebar activeClass={"users"} detailClass={"none"} />
          <div className="dashboard">
            <div className="dashboard-content">
              <header>
                <p>Users</p>
              </header>
              <section>
                {this.cards.map((card) => (
                  <div key={card.title} className="card">
                    <div className="card-img">
                      <img src={card.src} alt="card" />
                    </div>
                    <div className="card-title">
                      <p>{card.title}</p>
                    </div>
                    <div className="card-count">
                      <p>{card.count}</p>
                    </div>
                  </div>
                ))}
              </section>
              <main>
                {this.state.isLoading ? (
                  <div>
                    {this.state.error !== ""
                      ? this.state.error + ", Reload to try again"
                      : "Loading..."}
                  </div>
                ) : (
                  <table className="lg-table">
                    <thead>
                      <tr className="table-head-row">
                        <td>
                          organization
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                          <FilterModal filter={this.filterProp()} />
                        </td>
                        <td>
                          username
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                        </td>
                        <td>
                          email
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                        </td>
                        <td>
                          phone number{" "}
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                        </td>
                        <td>
                          date joined
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                        </td>
                        <td>
                          status
                          <img
                            onClick={showFilter}
                            src={UserBar}
                            alt="user-bar"
                          />
                        </td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tempUserArr.map((userDetail, index) => (
                        <tr key={index}>
                          <td className="organization">{userDetail.orgName}</td>
                          <td className="username">{userDetail.userName}</td>
                          <td className="email">{userDetail.email}</td>
                          <td className="phone-number">
                            {userDetail.phoneNumber.split("x")[0]}
                          </td>
                          <td className="date">
                            {new Date(userDetail.createdAt)
                              .toDateString()
                              .slice(3) +
                              " " +
                              new Date(userDetail.createdAt)
                                .toTimeString()
                                .slice(0, 5) +
                              "AM"}
                          </td>
                          <td className="status">
                            <div className="status-active">Active</div>
                          </td>
                          <td className="options">
                            <span
                              className="options-btn"
                              onClick={this.showOptions}
                              ref={this.optionsBtnRef}
                            >
                              <BsThreeDotsVertical />
                            </span>
                            <OptionsModal user={userDetail} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <div className="sm-table">
                  {this.state.tempUserArr.map((userDetail, index) => (
                    <table className="sm-table-tb" key={index}>
                      <thead>
                        <tr className="capitalize">
                          <td>organization</td>
                          <td className="organization">{userDetail.orgName}</td>
                        </tr>
                        <tr className="capitalize">
                          <td>username</td>
                          <td className="username">{userDetail.userName}</td>
                        </tr>
                        <tr className="capitalize">
                          <td>email</td>
                          <td className="email">{userDetail.email}</td>
                        </tr>
                        <tr className="capitalize">
                          <td>phone number</td>
                          <td className="phone-number">
                            {userDetail.phoneNumber.split("x")[0]}
                          </td>
                        </tr>
                        <tr className="capitalize">
                          <td>date joined</td>
                          <td className="date">{userDetail.createdAt}</td>
                        </tr>
                        <tr className="capitalize">
                          <td>status</td>
                          <td className="status">
                            <div className="status-active">Active</div>
                          </td>
                        </tr>
                        <tr className="capitalize">
                          <td>
                            <div className="view-details-sm">
                              <BsEye />
                              <Link
                                className="route-link"
                                to={`user/${userDetail.id}`}
                              >
                                View Details
                              </Link>
                            </div>
                          </td>
                          <td>
                            <div className="blacklist">
                              <div>
                                <img src={UserTimes} alt="blacklist" />
                              </div>
                              <p>Blacklist User</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="capitalize">
                          <td>
                            <div className="activate">
                              <div>
                                <img src={UserCheck} alt="activate" />
                              </div>
                              <p>Activate User</p>
                            </div>
                          </td>
                          <td>Filter Users</td>
                        </tr>
                      </thead>
                    </table>
                  ))}
                </div>
              </main>
              <footer>
                <div className="footer-content">
                  <div className="current-page">
                    <div>
                      <div>
                        Showing
                        <span className="current-page-no">
                          <input
                            onBlur={(e) => this.setTableRows(e)}
                            type="text"
                          />
                          <TfiAngleDown />
                        </span>
                        out of
                        <span className="total-pages-no">100</span>
                      </div>
                    </div>
                  </div>
                  <div className="users-count">
                    <div
                      onClick={(e) => this.changePages(this.element, e)}
                      className="prev-page"
                    >
                      <TfiAngleLeft />
                    </div>
                    <div className="pages">
                      <span className="pages-current">
                        {this.state.pageCount <= this.state.totalPages
                          ? this.state.pageCount
                          : ""}
                      </span>
                      <span>
                        {this.state.pageCount + 1 <= this.state.totalPages
                          ? this.state.pageCount + 1
                          : ""}
                      </span>
                      <span>
                        {this.state.pageCount + 2 <= this.state.totalPages
                          ? this.state.pageCount + 2
                          : ""}
                      </span>
                      {this.state.pageCount + 5 >= this.state.totalPages ? (
                        <span>
                          {this.state.pageCount + 3 > this.state.totalPages
                            ? ""
                            : this.state.pageCount + 3}
                        </span>
                      ) : (
                        <span>...</span>
                      )}
                      {this.state.pageCount + 4 >= this.state.totalPages ? (
                        <span>
                          {this.state.pageCount === 12 ? (
                            <span></span>
                          ) : (
                            <span></span>
                          )}
                        </span>
                      ) : (
                        <span>{this.state.totalPages - 1}</span>
                      )}
                      {this.state.pageCount + 4 >= this.state.totalPages ? (
                        ""
                      ) : (
                        <span className="">{this.state.totalPages}</span>
                      )}
                    </div>
                    <div
                      onClick={(e) => this.changePages(this.element, e)}
                      className="next-page"
                    >
                      <TfiAngleRight />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Users.prototype.filterUsers = filterUsers;
Users.prototype.changePages = changePages;
export default Users;
