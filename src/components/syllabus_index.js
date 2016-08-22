import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import { fetchSubjects } from '../actions/index';
import SVGsquare from './svg_square';


class SyllabusIndex extends Component {
   
   componentWillMount(){
     this.props.fetchSubjects();
   }

   renderSubjects(){
       console.log(this.props.subjects);
       
       return this.props.subjects.map((subject) => {
           return(
               <SVGsquare name={subject.name}/>
           );
       });
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