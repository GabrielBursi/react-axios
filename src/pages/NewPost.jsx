import './styles/newPost.css'

function NewPostPage() {
    return (
        <div className="new-post">
            <h2>Create a new Post:</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Title:</label>
                    <input type='text' name="title" id="title" placeholder="Write here"/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Content:</label>
                    <textarea name="body" id="body" placeholder="Write the content"></textarea>
                </div>
                <button>Create Post</button>
            </form>
        </div>
    );
}

export default NewPostPage;