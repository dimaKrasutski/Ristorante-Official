import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';


class DishDetail extends Component{
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

export default DishDetail;