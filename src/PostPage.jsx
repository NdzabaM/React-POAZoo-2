import {useParams, Link} from 'react-router-dom';

const PostPage = ({posts}) =>
{
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
    <main className="PostPage">
        <article className="post">
            {post &&
            <>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
                <p className="postBody">{post.body}</p>
                <Link to='/'><button>
                    Back to Home
                </button>
                </Link>
            </>
            }
            {!post &&
            <>
            <h2>Post Not Found</h2>
            <p>Well, That sucks!</p>
            <p>
                <Link to='/'>Please Visit Our Homepage</Link>
            </p>
            </>
            }
        </article>

    </main>
    );
};

export default PostPage;