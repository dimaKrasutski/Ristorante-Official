import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import { comment } from 'postcss';


export class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDishDetail(dish){
    
     if(dish != null)
        return (
          <div>
         <CardTitle>{this.props.name}</CardTitle>
         <CardText>{this.props.description}</CardText>
         </div>
        ); 
    else 
        return (
            <div></div>
        )

    }
    
    render(){
        
        return( 
            <div className='row'>
                     {this.renderDishDetail(this.props.dish)}
                      </div>
        )
    }
}




export class Comments extends Component {
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



