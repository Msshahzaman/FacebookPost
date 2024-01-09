// import './PostBtn.css';


function PostBtn({item}){

    function toggleLike(button) {
        // Implement your logic to handle like functionality here
        console.log('Liked!');
    }

    function toggleComment(button) {
        // Implement your logic to handle comment functionality here
        console.log('Commented!');
    }

    function sharePost() {
        // Implement your logic to handle share functionality here
        console.log('Shared!');
    }


    // Renderer
    return <div>
       {/* <div className="actions">
                    <button class="action-btn like-btn" onClick={toggleLike()}>Like</button>
                    <button class="action-btn comment-btn" onClick={toggleComment()}>Comment</button>
                    <button class="action-btn share-btn" onClick={sharePost()}>Share</button>
            </div>  */}
    </div>
}
export default PostBtn