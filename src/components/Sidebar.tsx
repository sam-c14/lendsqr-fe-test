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
import {FaAngleDown} from 'react-icons/fa'

import React from 'react'

const Sidebar = () => {
  type Customers = Array<{src:string,text:string}>;
  const customers : Customers = [
    {
      src : UserFriends,
      text : 'Users'
    },
    {
      src : Users,
      text : 'Guarantors'
    },
    {
      src : Sack,
      text : 'Loans'
    },
    {
      src : HandshakeRegular,
      text : 'Fees and Charges'
    },
    {
      src : PiggyBank,
      text : 'Savings'
    },
    {
      src : Loan,
      text : 'Loan Requests'
    },
    {
      src : UserCheck,
      text : 'Whitelist'
    },
    {
      src : UserTimes,
      text : 'Karma'
    }
  ]
  const business : Customers = [
    {
      src : Briefcase,
      text : 'Organization'
    },
    {
      src : Loan,
      text : 'Loan Products'
    },
    {
      src : Bank,
      text : 'Savings Products'
    },
    {
      src : CoinsSolid,
      text : 'Fees and Charges'
    },
    {
      src : Transactions,
      text : 'Transactions'
    },
    {
      src : Galaxy,
      text : 'Services'
    },
    {
      src : UserCog,
      text : 'Service Account'
    },
    {
      src : Scroll,
      text : 'Settlements'
    },
    {
      src : ChartBar,
      text : 'Reports'
    }
  ]
  const settings : Customers = [
    {
      src : SlidersH,
      text : 'Preferences'
    },
    {
      src : BadgePercent,
      text : 'Fees and Pricing'
    },
   
    {
      src : ClipboardList,
      text : 'Audit Logs'
    },
  ]

  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
          <header className=''>
            <div className='organization'>
              <div><img src={Briefcase} alt="Briefcase" /></div>
              <p>Switch Organization</p>
              <FaAngleDown />
            </div>
            <div className='dashboard'>
              <div>
                <div><img src={Home} alt="Dashboard" /></div>
                <p>Dashboard</p>
              </div>
            </div>
          </header>
          <section className='customize'>
            <header>
              <h3>customers</h3>
            </header>
            <main>
              {
                customers.map((customer)=>(
                <div key={customer.text}>
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
                <div key={customer.text}>
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
                <div key={customer.text}>
                  <div><img src={customer.src} alt="users" /></div>
                  <p>{customer.text}</p>
              </div>
                ))
              }
            </main>
          </section>
        </div>
    </div>
  )
}

export default Sidebar