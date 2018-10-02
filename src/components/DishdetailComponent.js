import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem,Modal,ModalHeader,Label,Button,Col,Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';


function RenderDish({dish}) {
        if (dish != null)
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card key={dish.id}>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );
    else
        return(
            <div></div>
        );
  
        }
   
    function RenderComments({comments,postComment,dishId}) {
        if (comments != null) { 
                return(

                <div >
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                </ul>
                </div>
                )
        } else {
            return (
                <div></div>
            );
        }
    }

    const  DishDetail = (props) => {
        if(props.isLoading){
          return (
            <div className='container'>
            <div className='row'>
               <Loading/>
            </div>
            </div>
          );
        }
        else if (props.errMess){
            return (
                <div className='container'>
                <div className='row'>
                       <h4>{props.errMess}</h4>
                </div>
                </div>
              );
        }
       else if(props.dish != null){
            return(
                <div className='container'>
                 <div className='row'>
            <Breadcrumb>
            {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr/>
            </div>
            </div>
           <div className='row' >
           <div className='col-12 col-md-5 m-1'><RenderDish dish={props.dish}></RenderDish></div>
          <div className='col-12 col-md-5 m-1'><RenderComments comments={props.comments}
          postComment = {props.postComment}
          dishId = {props.dish.id}
          ></RenderComments>
          </div>
            </div> 
           
            </div>)
            }
            else 
            return (<div></div>)
    }

export default DishDetail;





const required = (val)=> val && val.length;
const maxLength =(len)=>(val) =>!(val) || (val.length <= len)
const minLength =(len)=>(val) =>val && (val.length >= len)

    
class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen:false,
            isModalOpen:false
        }
       
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        this.toggleModal()
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)  
        console.log(values)
    }

   toggleModal(){
       this.setState({
           isModalOpen: !this.state.isModalOpen
       })
   }
   
    render(){
        return(
            <div>
            <Button onClick={this.toggleModal} >
            <span className="fa fa-pencil">Submit Comment</span>
            </Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
<ModalHeader>Submit Comment</ModalHeader>

<LocalForm onSubmit={(values) => this.handleSubmit(values)}>

<Row className="form-group">
<Label htmlFor="rating" md={{size:8,offset:1}}>Rating</Label>
      <Col md={{size: 8, offset: 1}}>
      <Control.select name="rating" model='.rating' id="rating" className='form-control'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Control.select>
      </Col>
  </Row>
 
<Row className="form-group">
<Label htmlFor="author" md={{size: 8, offset: 1}}>Your Name</Label>
      <Col md={{size:8,offset:1}}>
          <Control.text model=".author" id="author" name="author" // class model='' should be exactly as a name of payload in action
              placeholder="Your Name"
              className="form-control"
              validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
              }}
               />
               <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
      </Col>
  </Row>
  <Row className="form-group">
      <Label htmlFor="comment" md={{size: 8, offset: 1}}>Comment</Label>
      <Col md={{size:8,offset:1}}>
          <Control.textarea model=".comment" id="comment" name="comment" // class model='' should be exactly as a name of payload in action
              rows="12"
              className="form-control" />
      </Col>
  </Row>
  <Row className="form-group">
      <Col md={{size:8, offset: 1}}>
          <Button type="submit" color="primary">
          Submit
          </Button>
      </Col>
  </Row>
</LocalForm>

       </Modal>
       </div>
    )
    
    }
   


}
