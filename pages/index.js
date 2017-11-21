import PageLayout from '../components/PageLayout';
import Projects from '../components/Projects';
import Stars from '../components/Stars';
import Books from '../components/Books';
import InstagramFeed from '../components/InstagramFeed';
import getData from '../components/utilities/getData';

const Index = (props) => (

    <div>
        <PageLayout>
            <Projects data={props.projects} />
            <Stars totalItemsInView={3} totalItems={props.stars.length} data={props.stars} dataSetter={getData('stars')} />
            <InstagramFeed totalItemsInView={4} totalItems={props.instagram.length} data={props.instagram} dataSetter={getData('instagrams')} />
            <Books totalItemsInView={3} totalItems={props.books.length} data={props.books} dataSetter={getData('books')} />    
        </PageLayout>
    </div>

)

Index.getInitialProps = async function () {
    const projects = await getData('projects')
    const books = await getData('books')
    const stars = await getData('stars')
    const instagram = await getData('instagrams')

    return {
        projects: projects.data.data,
        books: books.data.review,
        stars: stars.data.reverse(),
        instagram: instagram.data.data
    }
}

export default Index