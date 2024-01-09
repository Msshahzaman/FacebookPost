import './post.css';
import PostBtn from './PostBtns';
import PostImg from './PostImg';
import PostTitle from './PostTitle';


function PostComponent({allPost}){
    


return (<div > 
        
        
        {allPost.map((item)=>{
    
        return <div className='map'> 

        <PostTitle postTitle={item} postImages={item.images} postBtn item={item}/>
      
        </div>
    }) 
    }
    
       </div>)



}
export default PostComponent