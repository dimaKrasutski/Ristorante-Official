import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
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

    renderComments(comments) {
        if (comments != null) {
            const dishComments = comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
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
            <div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDishComments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;