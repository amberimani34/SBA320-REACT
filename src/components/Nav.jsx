import { Link } from 'react-router';

function Nav () {
    return (
        <>
        <div className='nav'>
        <Link to='/'>
            <div>HOMEPAGE</div>
            </Link>
            <Link to='/winepairings'>
            <div>WINE & FOOD PAIRINGS</div>
            </Link>
            <Link to='/recipes'>
            <div>RECIPES</div>
            </Link>
        </div>
        </>
    )
}

export default Nav;