import PageLayout from '../components/PageLayout';
import Books from '../components/Books';
import getData from '../components/utilities/getData';

const Allbooks = (props) => (

    <div>
        <PageLayout>
            <br /><br />
            <Books totalItemsInView={9} totalItems={props.books.length} data={props.books} dataSetter={getData('books')} />
        </PageLayout>
    </div>

)

Allbooks.getInitialProps = async function () {
    const books = await getData('books')

    return {
        books: books.data.review,
    }
}

export default Allbooks;