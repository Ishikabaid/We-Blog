import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {


    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by <span>{blog.author}</span></p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;