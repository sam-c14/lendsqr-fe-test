import BadgePercent from '../assests/images/badge-percent.svg'
import Bank from '../assests/images/Bank.svg'
import BellIcon from '../assests/images/BellIcon.svg'
import Briefcase from '../assests/images/Briefcase.svg'
import Home from '../assests/images/Home.svg'
import UserFriends from '../assests/images/UserFriends.svg'
import Users from '../assests/images/Users.svg'
import ChartBar from '../assests/images/chart-bar.svg'
import ClipboardList from '../assests/images/clipboard-list.svg'
import Galaxy from '../assests/images/galaxy.svg'
import HandshakeRegular from '../assests/images/handshake-regular.svg'
import Loan from '../assests/images/Loan.svg'
import PiggyBank from '../assests/images/piggy-bank.svg'
import Sack from '../assests/images/Sack.svg'
import Scroll from '../assests/images/Scroll.svg'
import CoinsSolid from '../assests/images/CoinsSolid.svg'
import SlidersH from '../assests/images/sliders-h.svg'
import Transactions from '../assests/images/Transactions.svg'
import UserCheck from '../assests/images/user-check.svg'
import UserCog from '../assests/images/user-cog.svg'
import UserTimes from '../assests/images/user-times.svg'
import LogoutImg from '../assests/images/LogoutImg.svg'
import {onDetailsPage,SidebarType} from '../types/globalTypes'
import {FaAngleDown} from 'react-icons/fa'
import React from 'react'

const Sidebar = ({detailClass,activeClass}: onDetailsPage)  => {

  const customers : SidebarType = [
    {
      src : UserFriends,
      text : 'Users',
      name : 'users'
    },
    {
      src : Users,
      text : 'Guarantors',
      name : 'guarantors'
    },
    {
      src : Sack,
      text : 'Loans',
      name : 'loans'
    },
    {
      src : HandshakeRegular,
      text : 'Fees and Charges',
      name : 'fees-charges'
    },
    {
      src : PiggyBank,
      text : 'Savings',
      name : 'savings'
    },
    {
      src : Loan,
      text : 'Loan Requests',
      name : 'loan-req'
    },
    {
      src : UserCheck,
      text : 'Whitelist',
      name : 'whitelist'
    },
    {
      src : UserTimes,
      text : 'Karma',
      name : 'karma'
    }
  ]
  const business : SidebarType = [
    {
      src : Briefcase,
      text : 'Organization',
      name : 'org'
    },
    {
      src : Loan,
      text : 'Loan Products',
      name : 'loan-prod'
    },
    {
      src : Bank,
      text : 'Savings Products',
      name : 'save-prod'
    },
    {
      src : CoinsSolid,
      text : 'Fees and Charges',
      name : 'fees-charge-business'
    },
    {
      src : Transactions,
      text : 'Transactions',
      name : 'transactions'
    },
    {
      src : Galaxy,
      text : 'Services',
      name : 'services'
    },
    {
      src : UserCog,
      text : 'Service Account',
      name : 'service-acc'
    },
    {
      src : Scroll,
      text : 'Settlements',
      name : 'settlements'
    },
    {
      src : ChartBar,
      text : 'Reports',
      name : 'reports'
    }
  ]
  const settings : SidebarType = [
    {
      src : SlidersH,
      text : 'Preferences',
      name : 'prefs'
    },
    {
      src : BadgePercent,
      text : 'Fees and Pricing',
      name : 'fees-pricings'
    },
   
    {
      src : ClipboardList,
      text : 'Audit Logs',
      name : 'audit-logs'
    },
  ]

  return (
    <div className='sidebar' id={detailClass}>
        <div className='sidebar-content'>
          <header className=''>
            <div className='organization'>
              <div><img src={Briefcase} alt="Briefcase" /></div>
              <p>Switch Organization</p>
              <FaAngleDown />
            </div>
            <div className='dash-home'>
                <div>
                  <img src={Home} alt="Dashboard" />
                </div>
                  <p>Dashboard</p>
            </div>
          </header>
          <section className='customize'>
            <header>
              <h3>customers</h3>
            </header>
            <main>
              {
                customers.map((customer)=>(
                <div id={customer.name === activeClass ? 'active' : ''} key={customer.text}>
                  <div><img src={customer.src} alt="users" /></div>
                  <p>{customer.text}</p>
              </div>
                ))
              }
            </main>
          </section>
          <section className='business'>
            <header>
              <h3>business</h3>
            </header>
            <main>
              {
                business.map((customer)=>(
                <div id={customer.name === activeClass ? 'active' : ''} key={customer.text}>
                  <div><img src={customer.src} alt="users" /></div>
                  <p>{customer.text}</p>
              </div>
                ))
              }
            </main>
          </section>
          <section className='settings'>
            <header>
              <h3>settings</h3>
            </header>
            <main>
              {
                settings.map((customer)=>(
                <div id={customer.name === activeClass ? 'active' : ''} key={customer.text}>
                  <div><img src={customer.src} alt="users" /></div>
                  <p>{customer.text}</p>
              </div>
                ))
              }
            </main>
          </section>
          {
            detailClass === 'details-page' ? <section className='log-out'>
            <main>
              <div className='log-out-btn'>
                <div><img src={LogoutImg} alt="users" /></div>
                <p>logout</p>
              </div>
                <div className='version'>
                <p>v.1.2.0</p>
                </div>
            </main>
          </section> : ''
          }
        </div>
    </div>
  )
}

export default Sidebar