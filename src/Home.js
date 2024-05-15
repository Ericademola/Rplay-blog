import BlogLists from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://local:8000/blogs')

    // const [name, setName] = useState('mario')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }



    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    //let name ="mario";

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
    //     // name = "luigi";
    //     // console.log(name);
    // }


    // const handleClick = (e) => {
    //     console.log("Hello Ninjas", e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log("Hello " + name, e.target);
    // }

    return ( 
        <div className="Home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div> }
            { blogs && <BlogLists blogs = {blogs} title="All Blogs!"/>}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
            {/* <BlogLists blogs = {blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs!" /> */}



            {/* <h2>HomePage</h2>
            <p>{name} is {age}</p>
            <button onClick={handleClick}>Click Me</button> */}


            {/* <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button> */}
        </div>
    );
}
 
export default Home;