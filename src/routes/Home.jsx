import './css/Home.css';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <>
            <h1 id='home-title'>Neymar's Flashback</h1>
            <p id='home-p'>
                Projected by <a href="https://github.com/romeupeniche" target='_blank' rel="noreferrer">Romeu Peniche</a>, this website is a "catalogue" of Neymar Jr's career. <br />
                Made in purpose of learning and practicing React. <br />
                **Algo mais aqui**
            </p>
            <section id='home-links'>
                <Link to='timeline' id='hometo-timeline'>
                    <div>
                        Go to Timeline Page!
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Home;
