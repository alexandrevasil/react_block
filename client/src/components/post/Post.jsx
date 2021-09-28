import "./post.css";
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

    console.log(post)
    const PF = 'http://localhost:5000/images/'

    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c, index) => (
                        <span className="postCat" key={index}>{c.name}</span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    );
}

export default Post