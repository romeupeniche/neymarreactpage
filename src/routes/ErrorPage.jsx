import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <p>Error 404</p>
        <Link className='link' to='/'>Back To Home Page</Link>
        </>
    )
}

export default ErrorPage;