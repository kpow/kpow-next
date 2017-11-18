import fetch from 'isomorphic-unfetch'

const getData = async function (id, page = 1) {
    let res = null;
    switch (id) {
        case 'books':
            res = await fetch('https://kpow.space/static_data/books' + page + '.json');
            break;
        case 'projects':
            res = await fetch('https://kpow.space/services/projects.php');
            break;
        case 'instagrams':
            res = await fetch('https://kpow.space/services/instagram.php');
            break;
        case 'stars':
            res = await fetch('https://kpow.space/services/stars.php?page=' + page);
            break;
    }

    const data = await res.json();
    return { data }
}

export default getData;