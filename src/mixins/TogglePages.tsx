import {Users} from '../types/globalTypes'


function showPrevPage(mixinThis : Users){
    const nextPage = mixinThis.state.prevPageCount
    const prevPage = mixinThis.state.prevPageCount - mixinThis.state.tableRows
    const pageCount = mixinThis.state.pageCount - 1
    mixinThis.checkPageCount(pageCount)
    mixinThis.setState({prevPageCount : prevPage})
    mixinThis.setState({nextPageCount : nextPage})
    mixinThis.setState({tempUserArr : mixinThis.state.users.slice(prevPage,nextPage)})
} 

function changePages(mixinThis : Users,e : React.MouseEvent<HTMLDivElement>){
    if(mixinThis.state.prevPageCount > 0 && e.currentTarget.classList.contains("prev-page"))showPrevPage(mixinThis)
    else if(mixinThis.state.nextPageCount < mixinThis.state.users.length && e.currentTarget.classList.contains('next-page'))showNextPage(mixinThis)
}

function showNextPage(mixinThis : Users){
    const prevPage = mixinThis.state.nextPageCount
    const nextPage = mixinThis.state.nextPageCount + mixinThis.state.tableRows
    const pageCount = mixinThis.state.pageCount + 1
    mixinThis.checkPageCount(pageCount)
    mixinThis.setState({prevPageCount : prevPage})
    mixinThis.setState({nextPageCount : nextPage})
    mixinThis.setState({tempUserArr : mixinThis.state.users.slice(prevPage,nextPage)})
}
export {changePages}