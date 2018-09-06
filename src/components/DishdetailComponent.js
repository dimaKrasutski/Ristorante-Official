import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return( 
            <div className='row'>
                      <CardTitle>{this.props.name}</CardTitle>
                      <CardText>{this.props.description}</CardText>
                      </div>
        )
    }
}

export default DishDetail;