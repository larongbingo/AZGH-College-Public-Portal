import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { ENDPOINT } from "../../config";

export class CourseSelections extends Component<{}, ICourseSelectionsStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      subjects: []
    };
  }

  public componentDidMount() {
    fetch(`${ENDPOINT}/apis/subjects`)
      .then((res) => res.json())
      .then((vals) => this.setState({isLoading: false, subjects: vals.payload.programs}))
      .catch((err) => {
        console.error(err);
        window.location.href = "/?message=Error occurred when loading courses";
      });
  }

  public render() {
    if(this.state.isLoading) {
      return (<></>);
    }
    
    return (
      <>
        {
          this.state.subjects.map((subject) => <option value={subject.code}>{subject.title}</option>)
        }
      </>
    );
  }
}

interface ICourseSelectionsStates {
  isLoading: boolean;
  subjects: Array<{title: string, code: string}>;
}

export default CourseSelections;
