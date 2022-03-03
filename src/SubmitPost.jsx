const NewPost = ({
    handleSubmit, postTitle, postEmail, setPostEmail, setPostTitle, postBody, setPostBody
}) => {
    return (
    <main className="SubmitPost"> 
        <h2>Post Query Here</h2>
        <form className="newPostForm">
            <label htmlFor="postTitle">Title:</label>
            <input
                id="postTitle"
                type="text"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postEmail">e-Mail:</label>
            <input
                id="postEmail"
                type="text"
                required
                value={postEmail}
                onChange={(e) => setPostEmail(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
                id="postBody"
                required 
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    </main>
        
        );
};

export default NewPost