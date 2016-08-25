import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import { fetchSubjects } from '../actions/index';
import SVGsquare from './svg_square';

const levels = 10;
class SyllabusIndex extends Component {
   
   componentWillMount(){
     this.props.fetchSubjects();
   }

   renderSubjectsByLevel(level){
       let subjectsLevel = this.props.subjects.filter((subject) => {
           return subject.level == level;
       }); 
       return subjectsLevel.map((subject,i) => {
         if(subject.level == level){
             let positionMapping = { index:i , id:subject.id};
             return(
               <SVGsquare name={subject.name} 
                          index={i}
                          key={subject.id}
                          level={subject.level}
                          mapPosition={positionMapping}
                          prIds={subject.prerequisites}
                           />
           );
        }
       });
   }

   renderSubjects(){
     let subjs = [];
     for(let i=0;i<10;i++){
          subjs.push(this.renderSubjectsByLevel(i));
     }
     return subjs;

   }


    render () {
        return (
            <div>
               <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1080 1080">
                   {this.renderSubjects()}
                </svg>         
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { subjects: state.subjects.all}
}

export default connect(mapStateToProps,{ fetchSubjects })(SyllabusIndex); 