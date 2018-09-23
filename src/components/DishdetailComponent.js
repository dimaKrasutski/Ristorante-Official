import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input,Button,Col,Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';


function RenderDish({dish}) {
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
    function RenderComments({comments}) {
        if (comments != null) {
            const dishComments = comments.map((comment) => {
                return (
                    <li key={comment.key}>
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
                    <CommentForm></CommentForm>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    const  DishDetail = (props) => {
        if(props.dish != null){
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
          <div className='col-12 col-md-5 m-1'><RenderComments comments={props.comments}></RenderComments>
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
        console.log('Current state is: ' +JSON.stringify(values))
        alert('Current state is: ' +JSON.stringify(values))          
    }

   toggleModal(){
       this.setState({
           isModalOpen: !this.state.isModalOpen
       })
   }
   
    render(){
        return(
            <div>
            <Button onClick={this.toggleModal}>
            <span className="fa fa-pencil"> Submmit Comment</span>
            </Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
<ModalHeader>Submit Comment</ModalHeader>
<LocalForm onSubmit={(values) => this.handleSubmit(values)}>

<Row className="form-group">
<Label htmlFor="firstname" md={{size:8,offset:1}}>Rating</Label>
      <Col md={{size: 8, offset: 1}}>
      <Input type="select" name="select" model='checkbox' id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
      </Col>
  </Row>
 
<Row className="form-group">
<Label htmlFor="userName" md={{size: 8, offset: 1}}>Your Name</Label>
      <Col md={{size:8,offset:1}}>
          <Control.text model=".userName" id="userName" name="userName"
              placeholder="Your Name"
              className="form-control"
              validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
              }}
               />
               <Errors
                                        className="text-danger"
                                        model=".userName"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
      </Col>
  </Row>
  <Row className="form-group">
      <Label htmlFor="message" md={{size: 8, offset: 1}}>Comment</Label>
      <Col md={{size:8,offset:1}}>
          <Control.textarea model=".message" id="message" name="message"
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
