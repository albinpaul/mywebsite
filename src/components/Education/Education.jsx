import React from "react";
import TimeRange from "../TimeRange/TimeRange";
import './education.css';

class Education extends React.Component{
    state = {
        educations: [
            {
                "institute": "Model Engineering College",
                "instituteLink": "http://www-mec.mec.ac.in/mec/index.php",
                "course": "Btech Computer Engineering",
                "startDate": new Date(2014, 5, 4), 
                "endDate": new Date(2018,5 ,4) 
            }
        ]
    }
    render(){
        const {educations} = this.state;
        return (
            <section id="educations">
                <h1 className="section__title">Education</h1>
                {
                    educations.map(
                        education => (
                            <div className="education">
                              <h2 className="section__subtitle">{education.institute} <a href={education.instituteLink} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h2>
                                <div className="education_intro">
                                    <h3>{education.course}</h3>
                                    <TimeRange startDate = {education.startDate} 
                                        endDate = {education.endDate}></TimeRange>
                                </div>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Education;