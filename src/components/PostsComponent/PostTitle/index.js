import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEarthAmericas,faThumbsUp,faComment,faShareFromSquare} from '@fortawesome/free-solid-svg-icons'
import './PostTitle.css'
import FbImageLibrary from "react-fb-image-grid";


function PostTitle({postTitle,postImages,postBtn}){

    function toggleLike(button) {
        alert('Liked!');
    }

    function toggleComment(button) {
        alert('Commented!');
    }

    function sharePost() {
        alert('Shared!');
    }



    return <div className='main-div'>
     
<div className='card'>


{/* Top part = 1 */}
<div className="top-part">
    <img className='pro-pic' src="https://lh3.googleusercontent.com/a/ACg8ocJIT2IyIkEUSg2VQ5zOW1x4VUwhUYQtUVtXYTxcddcRa9E=s288-c-no" alt="" />
    <a  href="https://www.facebook.com/profile.php?id=100008772130753" target='blank'>Muhammad Shahzaman</a>
    <p> Mon 10 at 10:30 PM <span> <FontAwesomeIcon icon={faEarthAmericas} /></span></p>
   
  

   <div className='api-items'> 
   <b>Phone:</b> {postTitle?.title} <br />
   <b>Brand :</b> {postTitle?.brand}<br />
   <b>Description :</b> {postTitle?.description}
      </div>
   
    
</div>
{/* Top part = 2 */}

<div className='fb-img-library'>
<FbImageLibrary images={postImages}/>

</div>

{/* Top part = 3 */}


<div className="icons">
<button class="action-btn like-btn like" onClick={toggleLike}> <FontAwesomeIcon icon={faThumbsUp} /> &nbsp;Like</button>
<button class="action-btn comment-btn cmnt" onClick={toggleComment}><FontAwesomeIcon icon={faComment} />&nbsp;Comment</button>
<button class="action-btn share-btn share" onClick={sharePost}>
<FontAwesomeIcon icon={faShareFromSquare} />&nbsp;Share</button>
    
</div>


</div>

 
    </div>
}

export default PostTitle;