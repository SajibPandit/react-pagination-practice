import React from 'react'

const Posts=({posts,loading})=> {
    if(loading){
        return (
            <div className="text-center">
                <div className="spinner-grow text-primary mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }


    

    return (
        <ul className='mb-5'>
            {posts.map(post =>(
                <div key={post.id} className="jumbotron jumbotron-fluid shadow">
                    <div className="container">
                        <h4 className='text-center mb-4'>Post Id : {post.id}</h4>
                        <h3 className="text-center mb-2">{post.title}</h3>
                        <p className="lead text-center">{post.body}</p>
                    </div>
                </div>
            ))}
        </ul>
    )
}

export default Posts
