import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import {Loading} from './LoadingComponent';
import {Fade,Stagger} from 'react-animation-components';
import { basename } from 'upath';

function RenderLeader(props){
    if(props.leadersIsLoading){
        return (
          <div className='container'>
          <div className='row'>
             <Loading/>
          </div>
          </div>
        );
      }
      else if (props.leadersErrMess){
        return (
            <div className='container'>
            <div className='row'>
                   <h4>{props.leadersErrMess}</h4>
            </div>
            </div>
          );
    } 
    else if(props.leaders !=null){
    
        return (
            <div>
                 <Stagger in >
           {props.leaders.map((leader)=>{
               return(
                       <Fade in exitOpacity={0.25}>
                        <Media key={leader.id}>
                        <Media left href="#">
                           <Media object className='m-4' src={baseUrl+leader.image} alt="Generic placeholder image" />
                            </Media>
                              <Media body className ='m-4'>
                          <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                           {leader.description}
                            </Media>
                           </Media>
                           </Fade>
        )})}
        </Stagger>   
           </div>
    )}
               } 

function About(props) {

    { props.leaders.map((leader) => {
        return (
            <p>Leader {leader.name}</p>
        );
    })};

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>At Messa the feast is for the eyes as well as the palate. Recently redesigned in striking contemporary style with different color ‘zones’ for the dining and bar areas, the restaurant has won plaudits for its beautiful interior – including being named one of the ‘50 most beautiful restaurants in the world’ by esteemed design magazine Wallpaper.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan,
                     that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1 Jan. 2001</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Ristorante Official LLC</dd>
                                <dt className="col-6">Last Year's Income</dt>
                                <dd className="col-6">$2,400,123</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">34</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 m-5">
                    <h2 >Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <RenderLeader leaders={props.leaders} 
                        leadersIsLoading={props.leadersIsLoading}
                        leadersErrMess = {props.leadersErrMess}
                        ></RenderLeader>
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    