import PageLayout from '../components/PageLayout';
import ResumeContainer from '../components/ResumeContainer';

const Resume = (props) => (

    <div>
        <PageLayout>
            <ResumeContainer />
        </PageLayout>
    </div>

)

Resume.getInitialProps = async function () {

    return {
    }
}

export default Resume;