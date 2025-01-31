const BlogLists = ({blogs, title}) => { // props

    // const blogs = props.blogs;
    // const title  = props.title;

    // console.log(props,blogs);

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Write by {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete bolg</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogLists;