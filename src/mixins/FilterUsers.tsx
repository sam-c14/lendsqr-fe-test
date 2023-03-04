 import {Users} from '../types/globalTypes'
 

const showFilter = ()=>(
    !document.querySelector('.filter')?.classList.contains('block') ? document.querySelector('.filter')?.classList.add('block') :  document.querySelector('.filter')?.classList.remove('block')
  )

const  hideFilter = (e :  React.MouseEvent<HTMLButtonElement>) =>(
        e.preventDefault(),
        document.querySelector('.filter')?.classList.remove('block')
  )

 function filterUsers(element : Users,e :  React.MouseEvent<HTMLButtonElement>)  {
        hideFilter(e)
        element.setState({isFiltered : true})
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

        element.setState({tempUserArr : 
            element.state.users.filter((user)=>(
             user.orgName === org.value || user.userName === userName.value || user.email === email.value || user.phoneNumber === phoneNumber.value ? [user] : ''
            ))
        })
        org.value = userName.value = email.value = phoneNumber.value = ''   
    }


export {filterUsers,showFilter,hideFilter}