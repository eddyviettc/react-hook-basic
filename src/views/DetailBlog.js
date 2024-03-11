import { useParams } from 'react-router-dom'

const DetailBlog = () => {
    let { id } = useParams()
    return (
        <>
            <div>
                <span>&lt;--Back</span>

            </div>
            <div>Hello detail blogs with id = {id}</div>
        </>
    )
}

export default DetailBlog