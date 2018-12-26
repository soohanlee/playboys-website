import React, { Component } from 'react';
import '../styles/about.scss'
class About extends Component {
    render() {
        return (
            <div className="about-wrap">
                <div className="about-img"></div>
                <div className="about-text">
                    <h2>20대로 이루어진 야구 동아리</h2>
                    <div>야구 존나 재밌다.</div>
                </div>
            </div>
        );
    }
}

export default About;