import './../styles/components/ui/masthead.css';
import mastheadItems from '../data/mastheadItems';
import ThemeToggle from './ui/themetoggle';
function Masthead({toggleColorScheme, colorScheme}) {
    const leftmastheadData = mastheadItems.find(section => section.id === '1');
    const rightmastheadData = mastheadItems.find(section => section.id === '2');

    return (
        <header className="masthead ">

            <div className='masthead-items masthead-items left'>
                {leftmastheadData.data.map(item => (
                    <ul key={item.link}>
                        <a href={item.link}>{item.name}</a>
                    </ul>
                ))}
            </div>

            <div className="masthead-items masthead-logo" aria-hidden="true" title="Aafnai.com logo">
                <img
                    src="/assets/svg/logo-white.svg"
                    alt="Aafnai Ads Logo" />
            </div>

            <div className='masthead-items masthead-items right'>

                {rightmastheadData.data.map(item => (
                    <ul key={item.link}>
                        <a href={item.link} >{item.name}</a>
                    </ul>
                ))}
               <ThemeToggle toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}/>

            </div>



        </header>
    );
}

export default Masthead;