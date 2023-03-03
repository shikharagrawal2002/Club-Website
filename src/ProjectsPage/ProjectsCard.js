import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./Projects.css";

const ProjectsCard = ({ data }) => {
    return (
        <div>
            <Row lg={2} md={2} sm={1} className="projects-row-1">
            {data.map((data) => (
                <div>
                    <div className="projects-card">
                        <Row className="projects-row">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <img src={data.img} alt="Image" className="projects-img" />
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="projects-details">
                                <Row className="projects-title"><p>{data.Name}</p></Row>
                                <Row className="projects-description"><p>{data.Description}</p></Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            ))}
            </Row>
        </div>
    );
};

export default ProjectsCard;