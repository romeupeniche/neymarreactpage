import './css/ErrorPage.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const ErrorPage = () => {
    return (
        <>
            <Header />
            <h1 id='error-h1'>Error 404: Page Not Found</h1>
            <p id='error-p'>Apparently this link doesn't exist, check for a typo.</p>
            <p id='error-p'>If it is an internal site error, the developer will be notified.</p>
            <Link id='error-link' to='/'>
                <p id='error-link-p'>Back To Home Page</p>
            </Link>
        </>
    )
}

export default ErrorPage;