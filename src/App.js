import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Pagination from './components/Pagination'

const App = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  },[])

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  const paginate=(number) => setCurrentPage(number)

  return (
       <div className="container mt-3">
         <h1 className='text-primary mb-5 text-center'>My Blog Posts</h1>
         <Posts posts={currentPosts} loading={loading}/>
         <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
       </div>
  );
} 

export default App
