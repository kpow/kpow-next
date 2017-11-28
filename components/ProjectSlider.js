import { Button, Container, Grid, Header, Image, Segment, } from 'semantic-ui-react';
import Slider from 'react-slick';
import {Player, BigPlayButton} from 'video-react';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: false
};

const ProjectSlider = (props) => (

    <Slider {...settings} >

        {props.data.map((item, index) => (
            <div key={index} style={{ width: "600px" }}>

                <Container>
                    {item.content.video ? (

                        <Player src={item.content.video.fileUrl} poster={item.content.image.imageUrl} muted>
                            <BigPlayButton position="center" />
                        </Player>

                    ) : (<Image src={item.content.image.imageUrl} centered />)}
                </Container>

                <Grid columns={2} container stackable >
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <Container className='project-caption'>
                                <h3>{item.content.title}</h3>
                                <p>{item.content.blurb.markdown}</p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                            {item.content.url ? (
                                <Button primary href={item.content.url} target='_new' className='project-button'>
                                    view project
                         </Button>
                            ) : (<br />)}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        ))}
    </Slider>

)

export default ProjectSlider;