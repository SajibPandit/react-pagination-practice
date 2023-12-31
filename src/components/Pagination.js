import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate,currentPage}) => {

    const pageNumbers = []
    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {pageNumbers.map(number =>(
                    <li key={number} className={number===currentPage ? 'page-item active':'page-item'}>
                        <a href="!#" onClick={()=>paginate(number)} className='page-link'>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination










