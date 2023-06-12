import BurgerShakeFriesImg from './assets/burger-shake-fries.png';

const createHomePage = () => {
    const main = document.querySelector('main');
    main.className = 'main-home';

    const introSection = document.createElement('section');
    introSection.classList.add('home-intro-section');
    main.appendChild(introSection);

    const introTitle = document.createElement('h1');
    introTitle.textContent = 'High-Octane Burgers, Shakes & Fries';
    introTitle.classList.add('intro-title');
    introSection.appendChild(introTitle);

    const introText = document.createElement('p');
    introText.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing 
        elit. Quidem beatae culpa ipsam reprehenderit cum, saepe delectus labore 
        suscipit molestias illo doloribus quasi ea quis esse iusto ullam ut sint 
        obcaecati dignissimos quia officiis enim ab aliquid debitis! Hic 
        suscipit accusantium distinctio in aliquid deserunt molestias!`;
    introText.classList.add('intro-text');
    introSection.appendChild(introText);

    for (let i = 0; i < 2; i++) {
        const name = i ? 'Sign Up' : 'Order Now';

        const btn = document.createElement('button');
        btn.classList.add(`btn-${name.toLowerCase().split(' ').join('-')}`);
        introSection.appendChild(btn);

        const icon = document.createElement('i');
        icon.classList.add(
            'fa-solid',
            name === 'Order Now' ? 'fa-burger' : 'fa-right-to-bracket'
        );
        btn.appendChild(icon);
        btn.appendChild(document.createTextNode(name));
    }

    const imgSection = document.createElement('section');
    imgSection.classList.add('home-img-section');
    main.appendChild(imgSection);

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    imgSection.appendChild(imgWrapper);

    const homeImg = document.createElement('img');
    homeImg.src = BurgerShakeFriesImg;
    imgWrapper.appendChild(homeImg);

    return main;
};

export default createHomePage;
