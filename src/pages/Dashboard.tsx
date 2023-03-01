import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ActiveUsers from '../assests/images/ActiveUsers.svg'
import LoanedUsers from '../assests/images/LoanedUsers.svg'
import SavingsUsers from '../assests/images/SavingsUsers.svg'
import TotalUsers from '../assests/images/TotalUsers.svg'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {TfiAngleDown} from 'react-icons/tfi'
import {TfiAngleLeft} from 'react-icons/tfi'
import {TfiAngleRight} from 'react-icons/tfi'
import UserBar from '../assests/images/UserBar.svg'
import React from 'react'

  type Card = Array<{src:string,title:string,count:string}>;
  type UserDetail = Array<{org:string,username:string,email:string,phoneNo:string,date:string,status:string,statusClass:string}>;

export default class Dashboard extends React.Component {
   cards : Card = [
    {
      src : TotalUsers,
      title : 'Users',
      count : "2,453" 
    },
    {
      src : ActiveUsers,
      title : 'active users',
      count : "2,453" 
    },
    {
      src : LoanedUsers,
      title : 'users with loans',
      count : "12,453" 
    },
    {
      src : SavingsUsers,
      title : 'users with savings',
      count : "102,453" 
    },
    ]
    usersDetails : UserDetail = [
      {
        org : "Lendsqr",
        username : "Adedeji",
        email : "adedeji@lendsqr.com",
        phoneNo : "08078903721",
        date : "May 15, 2020 10:00 AM",
        status : "inactive",
        statusClass : 'status-inactive'
      },
      {
        org : "Irorun",
        username : "Debby Ogana",
        email : "debby2@irorun.com",
        phoneNo : "08160780928",
        date : "Apr 30, 2020 10:00 AM",
        status : "Pending",
        statusClass : 'status-pending'
      },
      {
        org : "Lendsqr",
        username : "Grace Effiom",
        email : "grace@lendstar.com",
        phoneNo : "07060780922",
        date : "Apr 30, 2020 10:00 AM",
        status : "Blacklisted",
        statusClass : 'status-blacklisted'
      },
      {
        org : "Lendsqr",
        username : "Tosin Dokunmu",
        email : "tosin@lendsqr.com",
        phoneNo : "07003309226",
        date : "Apr 10, 2020 10:00 AM",
        status : "Pending",
        statusClass : 'status-pending'
      },
      {
        org : "Lendsqr",
        username : "Grace Effiom",
        email :"grace@lendstar.com",
        phoneNo : "07060780922",
        date : "Apr 30, 2020 10:00 AM",
        status : "active",
        statusClass : 'status-active'
      },
      {
        org : "Lendsqr",
        username : "Tosin Dokunmu",
        email : "tosin@lendsqr.com",
        phoneNo : "07003309226",
        date : "Apr 10, 2020 10:00 AM",
        status : "active",
        statusClass : 'status-active'
      },
     {
        org : "Lendsqr",
        username : "Grace Effiom",
        email :"grace@lendstar.com",
        phoneNo : "07060780922",
        date : "Apr 30, 2020 10:00 AM",
        status : "blacklisted",
        statusClass : 'status-blacklisted'
      },
     {
        org : "Lendsqr",
        username : "Tosin Dokunmu",
        email : "tosin@lendsqr.com",
        phoneNo : "07003309226",
        date : "Apr 10, 2020 10:00 AM",
        status : "inactive",
        statusClass : 'status-inactive'
      },
     {
        org : "Lendsqr",
        username : "Grace Effiom",
        email :"grace@lendstar.com",
        phoneNo : "07060780922",
        date : "Apr 30, 2020 10:00 AM",
        status : "inactive",
        statusClass : 'status-inactive'
      },
    ]

  componentDidMount() {
    document.documentElement.classList.add('disable-scroll')
  }
  componentWillUnmount() {
    document.documentElement.classList.remove('disable-scroll')
    // Output: Counter has been unmounted!
  }

  render (){
  return (
    <div className='container'>
    <Navbar />
    <div className='dashboard-container'>
        <Sidebar />
        <div className='dashboard'>
         <div className='dashboard-content'>
          <header>
            <p>Users</p>
          </header>
          <section>
            {
              this.cards.map((card)=>(
              <div key={card.title} className='card'>
                <div className='card-img'><img src={card.src} alt="card" /></div>
                <div className='card-title'><p>{card.title}</p></div>
                <div className='card-count'><p>{card.count}</p></div>
            </div>
              ))
            }
          </section>
          <main>
            <table className='lg-table'>
                <th>
                  <td>organization <img src={UserBar} alt="user-bar" /></td>
                  <td>username <img src={UserBar} alt="user-bar" /></td>
                  <td>email <img src={UserBar} alt="user-bar" /></td>
                  <td>phone number <img src={UserBar} alt="user-bar" /></td>
                  <td>date joined <img src={UserBar} alt="user-bar" /></td>
                  <td>status <img src={UserBar} alt="user-bar" /></td>
                  <td></td>
                </th>
                {
                  this.usersDetails.map((userDetail,index)=>(
                  <tr key={index}>
                    <td className='organization'>{userDetail.org}</td>
                    <td className='username'>{userDetail.username}</td>
                    <td className='email'>{userDetail.email}</td>
                    <td className='phone-number'>{userDetail.phoneNo}</td>
                    <td className='date'>{userDetail.date}</td>
                    <td className='status'><div className={userDetail.statusClass}>{userDetail.status}</div></td>
                    <td className='options'><BsThreeDotsVertical /></td>
                  </tr>
                  ))
                }
            </table>
            <table className="sm-table">
              {
                this.usersDetails.map((userDetail,index)=>(
                  <table  className="sm-table-tb" key={index}>
                  <tr className='capitalize'>
                    <td>organization</td>
                    <td className='organization'>{userDetail.org}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>username</td>
                    <td className='username'>{userDetail.username}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>email</td>
                    <td className='email'>{userDetail.email}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>phone number</td>
                    <td className='phone-number'>{userDetail.phoneNo}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>date joined</td>
                    <td className='date'>{userDetail.date}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>status</td>
                    <td className='status'><div className={userDetail.statusClass}>{userDetail.status}</div></td>
                  </tr>
                  </table>
                  ))
                }
            </table>
          </main>
          <footer>
            <div className='footer-content'>
              <div className='current-page'>
                <div>
                  <div>Showing
                  <span className='current-page-no'>
                    100 
                  <TfiAngleDown />
                  </span>
                    out of 
                  <span className='total-pages-no'>100</span>
                  </div>
                </div>
              </div>
              <div className='users-count'>
                <div className='prev-page'><TfiAngleLeft /></div>
                <div className='pages'>
                  <span className='pages-current'>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>...</span>
                  <span>15</span>
                  <span>16</span>
                </div>
                <div className='next-page'><TfiAngleRight /></div>
              </div>
            </div>
          </footer>
         </div>
        </div>
    </div>
    </div>
  )
  }
}

// export default Dashboard