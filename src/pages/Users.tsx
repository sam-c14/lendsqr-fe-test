import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ActiveUsers from '../assests/images/ActiveUsers.svg'
import LoanedUsers from '../assests/images/LoanedUsers.svg'
import SavingsUsers from '../assests/images/SavingsUsers.svg'
import TotalUsers from '../assests/images/TotalUsers.svg'
import {BsThreeDotsVertical,BsEye} from 'react-icons/bs'
import {TfiAngleDown,TfiAngleRight,TfiAngleLeft} from 'react-icons/tfi'
import UserCheck from '../assests/images/user-check.svg'
import UserTimes from '../assests/images/user-times.svg'
import UserBar from '../assests/images/UserBar.svg'
import React, { MouseEventHandler } from 'react'

  type Card = Array<{src:string,title:string,count:string}>;
  type UserDetail = Array<{accountBalance:string,accountName:string,createdAt:string,education:object,email:string,guarantor:string,id:string,lastActiveString:string,orgName:string,phoneNumber:string,profile:object,socials:object,userName:string}>;
  interface User {
    users: UserDetail;
    isLoading: Boolean;
    tempUserArr : UserDetail;
    prevPageCount : number;
    nextPageCount : number;
    pageCount : number,
    isFiltered : Boolean
    }

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
    usersDetails : UserDetail = []

    state : User = {
    users: [],
    isLoading : true,
    tempUserArr : [],
    prevPageCount : 0,
    nextPageCount : 9,
    pageCount : 1,
    isFiltered : false
  }

    tempUserDetails = [1,2,3,4,5,6,7,8,9,10]

    optionsBtnRef = React.createRef<HTMLSpanElement>()
    containerRef = React.createRef<HTMLDivElement>()
    menuListRef = React.createRef<HTMLDivElement>()
    
  componentDidMount() {
    document.documentElement.classList.add('disable-scroll')
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ').then(info=>info.json()).then(data=>{
        this.setState({users : data,isLoading : false,tempUserArr : this.state.users.slice(this.state.prevPageCount,this.state.nextPageCount)})
        console.log(this.state.users)
    }).catch(err=>console.log(err))
    // setTimeout(()=>console.log(this.state.users),3000)
    // fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1').then(info=>info.json()).then(data=>console.log(data)).catch(err=>console.log(err))
    // console.log(this.testArr.slice(0,12))
  }
  componentWillUnmount() {
    document.documentElement.classList.remove('disable-scroll')
  }

  closeOptions = (e : React.MouseEvent<HTMLDivElement>)=>{
      const optionsBtns: Element[] = Array.from( document.getElementsByClassName('options-btn'));

        optionsBtns.map((btn)=>[
          e.target === btn.firstElementChild || e.target === btn.nextElementSibling || e.target ===  btn.nextElementSibling?.firstElementChild || e.target === btn.nextElementSibling?.firstElementChild?.nextElementSibling || e.target ===  btn.nextElementSibling?.lastElementChild? console.log('worked') : btn.nextElementSibling?.classList.remove('block')
        ])// To toggle optionsMenu if the outside of the container is clicked
  }

  showFilter = ()=>(
    !document.querySelector('.filter')?.classList.contains('block') ? document.querySelector('.filter')?.classList.add('block') :  console.log(this.state.users)
  )
  showOptions(e : React.MouseEvent<HTMLSpanElement>){
    e.currentTarget.nextElementSibling?.classList.add('block')
    }
    showPrevPage = () =>{
        const nextPage = this.state.prevPageCount
        const prevPage = this.state.prevPageCount - 9
        const pageCount = this.state.pageCount - 1
        this.setState({prevPageCount : prevPage})
        this.setState({nextPageCount : nextPage})
        this.setState({pageCount : pageCount})
        this.setState({tempUserArr : this.state.users.slice(prevPage,nextPage)})
    }       
    showNextPage = () =>{
        const prevPage = this.state.nextPageCount
        const nextPage = this.state.nextPageCount + 9
        const pageCount = this.state.pageCount + 1
        this.setState({prevPageCount : prevPage})
        this.setState({nextPageCount : nextPage})
        this.setState({pageCount : pageCount})
        this.setState({tempUserArr : this.state.users.slice(prevPage,nextPage)})
    }
    hideFilter = (e :  React.MouseEvent<HTMLButtonElement>) =>(
        e.preventDefault(),
        document.querySelector('.filter')?.classList.remove('block')
    )
    filterUsers = (e :  React.MouseEvent<HTMLButtonElement>) => {
        this.hideFilter(e)
        this.setState({isFiltered : true})
        const filter = document.querySelector(".filter") as HTMLDivElement
        filter.classList.add('filter-alt')
        const org = document.getElementById("organization") as HTMLInputElement
        const userName = document.getElementById("username") as HTMLInputElement
        const email = document.getElementById("email") as HTMLInputElement
        const phoneNumber = document.getElementById("phone-number") as HTMLInputElement
        const date = document.getElementById("date") as HTMLInputElement
        const Status = document.getElementById("status") as HTMLInputElement

        // Yet to sort out the noPrevPage when state is 0 or more than value
        // Clean up the code
        // Work on responsiveness to show btns

        this.setState({tempUserArr : 
            this.state.users.filter((user)=>(
             user.orgName === org.value || user.userName === userName.value || user.email === email.value || user.phoneNumber === phoneNumber.value ? [user] : ''
            ))
        })
        org.value = userName.value = email.value = phoneNumber.value = ''
         
    }
    resetUsers = (e : React.MouseEvent<HTMLButtonElement>) =>{
        this.hideFilter(e)
        this.setState({isFiltered : true})
        const filter = document.querySelector(".filter") as HTMLDivElement
        filter.classList.remove('filter-alt')
        this.setState({tempUserArr : this.state.users.slice(this.state.prevPageCount,this.state.nextPageCount)})
    }

  render (){
  return (
    <div onClick={this.closeOptions} ref={this.containerRef} className='container'>
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
            {
                this.state.isLoading ? <div>Loading...</div> : <table className='lg-table'>
                 <th>
                  <td>organization <img onClick={this.showFilter} src={UserBar} alt="user-bar" />
                     <div className='filter'>
                        <form action="">
                                <div>
                                    <label htmlFor="organization">organization
                                    </label>
                                    <input 
                                    type="text" id='organization'/>
                                </div>
                                <div>
                                    <label htmlFor="username">username
                                    </label>
                                    <input 
                                    type="text" id='username'/>
                                </div>
                                <div>
                                    <label htmlFor="email">email
                                    </label>
                                    <input 
                                    autoComplete= "false" 
                                    type="email" id='email'/>
                                </div>
                                <div>
                                    <label htmlFor="date">date
                                    </label>
                                    <input 
                                    placeholder='' type="date" id='date'/>
                                </div>
                                <div>
                                    <label htmlFor="phone-number">phone number
                                    </label>
                                    <input 
                                    type="number"
                                    autoComplete='' id='phone-number'/>
                                </div>
                                <div>
                                    <label htmlFor="status">status
                                    </label>
                                    <input 
                                    placeholder='Status' type="text" id='status'/>
                                </div>
                                <div className='filter-btn-container'>
                                    <button className='reset-btn' onClick={this.resetUsers}>reset</button>
                                    <button className='filter-btn' onClick={this.filterUsers}>filter</button>
                                </div>
                        </form>
                    </div>
                  </td>
                  <td>username <img onClick={this.showFilter} src={UserBar} alt="user-bar" /></td>
                  <td>email <img onClick={this.showFilter} src={UserBar} alt="user-bar" /></td>
                  <td>phone number <img onClick={this.showFilter} src={UserBar} alt="user-bar" /></td>
                  <td>date joined <img onClick={this.showFilter} src={UserBar} alt="user-bar" /></td>
                  <td>status <img onClick={this.showFilter} src={UserBar} alt="user-bar" /></td>
                  <td></td>
                </th>
                {
                  this.state.tempUserArr.map((userDetail,index)=>(
                  <tr key={index}>
                    <td className='organization'>{userDetail.orgName}</td>
                    <td className='username'>{userDetail.userName}</td>
                    <td className='email'>{userDetail.email}</td>
                    <td className='phone-number'>{userDetail.phoneNumber}</td>
                    <td className='date'>{new Date(userDetail.createdAt).toDateString().slice(3) + " " + new Date(userDetail.createdAt).toTimeString().slice(0,5) + "AM"}</td>
                    <td className='status'><div className="status-active">Active</div></td>
                    <td className='options'>
                      <span className='options-btn' onClick={this.showOptions} ref={this.optionsBtnRef}>
                        <BsThreeDotsVertical />
                      </span>
                    <div ref={this.menuListRef} className='options-menu'>
                      <div className='eye'>
                        <BsEye />
                        <p>View Details</p>
                      </div>
                      <div>
                        <div><img src={UserTimes} alt="bad user" /></div>
                        <p>Blacklist User</p>
                      </div>
                      <div>
                        <div><img src={UserCheck} alt="good user" /></div>
                        <p>Activate User</p>
                      </div>
                    </div></td>
                  </tr>
                  ))
                }
            </table>
            }
            <table className="sm-table">
              {
                this.state.tempUserArr.map((userDetail,index)=>(
                  <table  className="sm-table-tb" key={index}>
                  <tr className='capitalize'>
                    <td>organization</td>
                    <td className='organization'>{userDetail.orgName}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>username</td>
                    <td className='username'>{userDetail.userName}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>email</td>
                    <td className='email'>{userDetail.email}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>phone number</td>
                    <td className='phone-number'>{userDetail.phoneNumber}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>date joined</td>
                    <td className='date'>{userDetail.createdAt}</td>
                  </tr>
                  <tr className='capitalize'>
                    <td>status</td>
                    <td className='status'><div className="status-active">Active</div></td>
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
                <div onClick={this.showPrevPage} className='prev-page'><TfiAngleLeft /></div>
                <div className='pages'>
                  <span className='pages-current'>{this.state.pageCount}</span>
                  <span>{this.state.pageCount + 1}</span>
                  <span>{this.state.pageCount + 2}</span>
                  {
                    this.state.pageCount + 5 >=  Math.ceil(this.state.users.length / 9) ? <span>{
                        this.state.pageCount + 3 >  Math.ceil(this.state.users.length / 9) ? '' :this.state.pageCount + 3

                    }</span> : <span>...</span>
                  }
                  {
                      this.state.pageCount + 4 >= Math.ceil(this.state.users.length / 9) ? <span>{
                        this.state.pageCount === 12 ? <span>Math.ceil(this.state.users.length / 9)</span> : <span></span>
                      }</span> : <span>{Math.ceil(this.state.users.length / 9) - 1}</span>
                  }
                  {
                      this.state.pageCount + 4 >= Math.ceil(this.state.users.length / 9) ? '' : <span className=''>{Math.ceil(this.state.users.length / 9)}</span>
                  }
                </div>
                <div onClick={this.showNextPage} className='next-page'><TfiAngleRight /></div>
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