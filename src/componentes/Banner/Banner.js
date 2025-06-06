import './Banner.css';

export const Banner = () => {
    //parece html, mas não é. É JSX, aqui o react faz o append no DOM. Transforma em elementos no DOM. É igual o document.createELemente(imh)
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal do Organo"/>;
        </header>
    )
};
 