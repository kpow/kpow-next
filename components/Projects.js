import React, { Component } from 'react';
import {Button,Container,Grid,Header,Image,Segment,} from 'semantic-ui-react';
import ProjectSlider from '../components/ProjectSlider';


class Projects extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { }
  }

  componentDidMount() { }

  render() {

    return (
      <div>
      <Segment inverted vertical className={'all-layout'}>
        <Container>

        <Header as='h1' dividing inverted style={{ paddingTop: '1.75em' }}
         content = 'projects'
         subheader="a few of the projects I've worked on"
        />

        <ProjectSlider data={this.props.data} />

        </Container>
      </Segment>
      </div>


    )
  }
}

export default Projects;
