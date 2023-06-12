import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
import LogoImg from './assets/logo.png';

const createLogoName = () => {
    const logoName = document.createElement('p');
    logoName.textContent = 'Turbo Shack';
    logoName.classList.add('logo-name');

    const span = document.createElement('span');
    span.textContent = '.';
    logoName.appendChild(span);

    return logoName;
};

const createHeader = (currentPage) => {
    const header = document.createElement('header');

    const pages = ['Home', 'Menu', 'Contact Us'];

    const logo = document.createElement('div');
    logo.classList.add('logo');
    header.appendChild(logo);

    const logoImg = document.createElement('img');
    logoImg.src = LogoImg;
    logo.appendChild(logoImg);

    logo.appendChild(createLogoName());

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const navList = document.createElement('ul');
    nav.appendChild(navList);

    pages.forEach((page) => {
        const listItem = document.createElement('li');
        navList.appendChild(listItem);

        if (page === currentPage) listItem.classList.add('nav-active');

        const btn = document.createElement('button');
        btn.classList.add('nav-btn');
        listItem.appendChild(btn);

        const span = document.createElement('span');
        btn.appendChild(span);

        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        span.appendChild(icon);
        btn.appendChild(document.createTextNode(page));

        if (page === 'Home') icon.classList.add('fa-house');
        if (page === 'Menu') icon.classList.add('fa-burger');
        if (page === 'Contact Us') icon.classList.add('fa-phone');
    });

    return header;
};

const createFooter = () => {
    const footer = document.createElement('footer');

    const socialMediaPages = ['instagram', 'facebook', 'twitter'];

    const socials = document.createElement('div');
    socials.classList.add('footer-socials');
    footer.appendChild(socials);
    socials.appendChild(createLogoName());

    socialMediaPages.forEach((page) => {
        const link = document.createElement('a');
        link.href = `https://www.${page}.com/theodinproject`;
        socials.appendChild(link);

        const icon = document.createElement('i');
        icon.classList.add('fa-brands', `fa-${page}`);
        link.appendChild(icon);
    });

    const info = document.createElement('div');
    info.classList.add('footer-info');
    footer.appendChild(info);

    const projectLink = document.createElement('a');
    projectLink.href =
        'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page';
    projectLink.textContent = '© 2023 The Odin Project';
    info.appendChild(projectLink);

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ikaz1/restaurant-page';
    githubLink.textContent = 'by ikaz1';
    info.appendChild(githubLink);

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands', 'fa-github');
    githubLink.appendChild(githubIcon);

    const credit = document.createElement('div');
    credit.classList.add('footer-credit');
    footer.appendChild(credit);

    for (let i = 0; i < 2; i++) {
        const author = i ? 'Freepik' : 'Smashicons';

        const link = document.createElement('a');
        link.href = `https://www.flaticon.com/free-icons/fast-food`;
        link.textContent = `Fast food icons by ${author} - Flaticon`;
        credit.appendChild(link);
    }

    return footer;
};

const createPage = (page = 'Home') => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');

    document.title = `${page} | Turbo Shack`;
    content.textContent = '';

    content.appendChild(createHeader(page));
    content.appendChild(main);
    content.appendChild(createFooter());

    switch (page) {
        case 'Menu':
            main.replaceWith(createMenuPage());
            break;
        case 'Contact Us':
            main.replaceWith(createContactPage());
            break;
        default:
            main.replaceWith(createHomePage());
            break;
    }

    const homeBtn = document.querySelector('nav li:first-child .nav-btn');
    const menuBtn = document.querySelector('nav li:nth-child(2) .nav-btn');
    const contactBtn = document.querySelector('nav li:last-child .nav-btn');

    homeBtn.addEventListener('click', () => createPage('Home'));
    menuBtn.addEventListener('click', () => createPage('Menu'));
    contactBtn.addEventListener('click', () => createPage('Contact Us'));
};

export default createPage;
