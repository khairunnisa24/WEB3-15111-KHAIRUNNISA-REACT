import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Social Media',
        link : "https://www.instagram.com/khrnisaa24/",
        description: "You can also see my daily activity in this sosmed. So follow me hihi"
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Hobby',
        link : "https://www.instagram.com/travellingthroughtheworld/",
        description: "Jika anda memiliki hobi yang sama dengan saya yaitu travelling, anda bisa melihat refrensinya disini."
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Yoga',
        link : "https://www.instagram.com/yoga/",
        description: "Dengan banyaknya aktivitas yoga adalah satu satu bagi saya untuk merelaksasikan hati dan pikiran."
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Let's close to me
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                The random things that i do
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#7d5e2a',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <a href={data.link}>
                                                            <ButtonHome
                                                                text="Here"
                                                                background="#7e6752"
                                                                textColor="#fff"
                                                                className='button-participate'
                                                                onClick = {data.link}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;