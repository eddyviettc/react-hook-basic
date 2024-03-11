import useFetch from "../customize/fetch"
import './Blog.scss'
import { Link } from 'react-router-dom'

const Blog = () => {
    const { data: dataBlogs }
        = useFetch('https://jsonplaceholder.typicode.com/posts')
    let newData = []
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 10)
        console.log('check data : ', newData)

    }
    return (
        <div className="blogs-container">
            {newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-blog">
                        <div className="title">  {item.title}</div>
                        <div className="content">{item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>
                                view details :
                            </Link>
                        </button>

                    </div>
                )
            })}

        </div>
    )
}
export default Blog