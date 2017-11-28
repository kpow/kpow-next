import PageLayout from '../components/PageLayout';
import Stars from '../components/Stars';
import getData from '../components/utilities/getData';

const Allstars = (props) => (

    <div>
        <PageLayout>
            <br /><br />
            <Stars totalItemsInView={9} totalItems={props.stars.length} data={props.stars} dataSetter={getData('stars')} />
        </PageLayout>
    </div>

)

Allstars.getInitialProps = async function () {
    const stars = await getData('stars')

    return {
        stars: stars.data.reverse(),
    }
}

export default Allstars;