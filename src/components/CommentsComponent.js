import React , {Component} from 'react';
import {DISHES} from '../shared/dishes'

class Comments extends Component {
    constructor(props){
        super(props);
}
   
   renderComments(comments){
       if(comments != null){
      const Comm =  comments.map((comment)=>{
return <div><ul className='list-unstyled' key={comment.id}>
<li>{comment.comment}</li>
<br></br>
<li>-- {comment.author} , {comment.date}</li>
</ul> 
</div>
}) 
       return Comm; 
}
       else
       return (<div></div>)
   }
        


    render(){
            
        return( 
            <div>
                  {this.renderComments(this.props.dishComments)} 
                      </div>
        )
    }
}

export default Comments;