import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    
  constructor(props){
      super(props);
      this.state = {
          isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSumbit = this.handleSumbit.bind(this);

  }

  handleSumbit(values){
      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values) );
  }

  toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

  render(){
      return (
          <div>
              <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-pencil"> Submmit Comment</span>
              </Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submmit Comment</ModalHeader>           
                  <ModalBody>
                      <LocalForm onSubmit={(values) => this.handleSumbit(values)}>
                          <Label htmlFor="rating">Rating</Label>
                          <Control.select 
                              model=".rating" id="rating" name="rating"
                              className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </Control.select>
                          <div className="pt-3">                          
                          <Label htmlFor="author">Your name</Label>
                          <Control.text
                              model=".author" id="author" name="author"
                              placeholder="Your name"
                              className="form-control"
                              validators={{required, 
                                  minLength: minLength(3), 
                                  maxLength: maxLength(15)}} 
                          />
                          <Errors className="text-danger" 
                              model=".author" 
                              show="touched" 
                              messages={{
                                  required: 'Required ',
                                  minLength: 'Must be greater than 2 characters',
                                  maxLength: 'Must be 15 character or less'
                              }}
                          />
                          </div>
                          <div className="pt-3">
                              <Label htmlFor="comment">Comment</Label>
                              <Control.textarea 
                                  model=".comment" id="comment" name="comment"
                                  rows="6" className="form-control"/> 
                          </div>
                          <div className="pt-3">
                              <Button type="submit" color="primary">
                                  Submit
                              </Button>
                          </div>
                      </LocalForm>
                  </ModalBody>
              </Modal>
          </div>
      );
  }

}

  function RenderDish({dish}) {
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

  function RenderComments({comments}){
    if(comments !=null) {
      const cmt = comments.map((com) => {
        return (
          <ul className="list-unstyled  text-left" key={com.id}>
            <li>{com.comment}</li>
            <li>--{com.author},  {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(com.date))}</li>
          </ul>
        );
      });
      return(
        <div>
        <h4>Comments</h4>
          {cmt}
          <CommentForm/>
        </div>
      );
    } else {
        return(
         <div></div>
        );
    }
  }

  const DishDetail = (props) => {
    return (
      <div className="container">
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
          </div>
      </div>
      </div>
  );
  }


export default DishDetail;