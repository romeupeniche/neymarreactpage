import { useTranslation } from 'react-i18next';
import br from './assets/br.svg';
import us from './assets/us.svg';
import './style.css'

const languageOptions = [
    {
        name: 'Português',
        value: 'ptBR',
        flag: br
    },
    {
        name: 'English',
        value: 'en',
        flag: us
    }
]

function LanguageSwitcher (props) {
    const { i18n } = useTranslation();

    return (
        <div id={props.id}>
            {languageOptions.map(languageOption => (
                <button
                    key={languageOption.value}
                    className='ls-button'
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.name} />
                </button>
            ))}
        </div>
    )
}

export default LanguageSwitcher;