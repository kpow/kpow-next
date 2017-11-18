import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Head from 'next/head';

const PageLayout = (props) => (
    <div>
        <style global jsx>{`
            .site-logo {
                font-family: slackey;
                font-size: 2.25em;
            }

            .project-caption {margin-top: 18px;}

            .ui.button.project-button {
                position: relative;
                z-index: 100;
                margin: auto;
            }

            .ui.card, .ui.cards>.card {
                background: #000;
            }

            .ui.card>.content, .ui.cards>.card>.content {
                background: #fff;
            }

            .ui.cards a.card:hover,.ui.link.card:hover,
            .ui.link.cards .card:hover, a.ui.card:hover {
                background: #000;
            }

            .all-layout { margin-top: 75px;}
        `}</style>
        <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' />
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' />
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' />
            <link href="https://fonts.googleapis.com/css?family=Slackey" rel="stylesheet" />
        </Head>
        <SiteHeader />
        {props.children}
        <SiteFooter />
    </div>
)

export default PageLayout