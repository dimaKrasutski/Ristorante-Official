import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const dishComments = dish.comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-Us',{year:'numeric',month:"short",day:"2-digit"}).
                        format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{dishComments}</ul>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
           <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
                </div>
        );
    }
}

export default Dishdetail;