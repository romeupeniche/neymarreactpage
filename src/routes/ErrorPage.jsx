import './css/ErrorPage.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const ErrorPage = () => {
    return (
        <>
        <Header />
        <h1 id='error-h1'>Error 404: Página Não Encontrada</h1>
        <p id='error-p'>Aparentemente este link não existe, verifique se há um erro de digitação.</p>
        <p id='error-p'>Se for um erro interno do site, o desenvolvedor será avisado.</p>
        <Link id='error-link' to='/'>
            <p id='error-link-p'>Back To Home Page</p>
            </Link>
        </>
    )
}

export default ErrorPage;