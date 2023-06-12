import BurgersSectionImg from './assets/burgers-section.png';
import MilkshakesSectionImg from './assets/milkshakes-section.png';
import FriesSectionImg from './assets/fries-section.png';
import HamburgerImg from './assets/hamburger.png';
import CheeseburgerImg from './assets/cheeseburger.png';
import BaconBurgerImg from './assets/bacon-burger.png';
import DoubleCheeseburgerImg from './assets/double-cheeseburger.png';
import VanillaShakeImg from './assets/vanilla-milkshake.png';
import ChocolateShakeImg from './assets/chocolate-milkshake.png';
import StrawberryShakeImg from './assets/strawberry-milkshake.png';
import FrenchFriesImg from './assets/french-fries.png';
import CurlyFriesImg from './assets/curly-fries.png';

const MenuItem = (img, name, price, calories, carbs, fat, sodium) => {
    const nutrition = {
        calories,
        carbs,
        fat,
        sodium
    };

    return { img, name, price, nutrition };
};

const menu = [
    {
        img: BurgersSectionImg,
        title: 'Burgers',
        items: [
            MenuItem(
                HamburgerImg,
                'Hamburger',
                '$6.99',
                '900',
                '54',
                '58',
                '440'
            ),
            MenuItem(
                CheeseburgerImg,
                'Cheeseburger',
                '$7.49',
                '950',
                '56',
                '65',
                '780'
            ),
            MenuItem(
                BaconBurgerImg,
                'Bacon Burger',
                '$7.85',
                '930',
                '55',
                '62',
                '590'
            ),
            MenuItem(
                DoubleCheeseburgerImg,
                'Double Cheeseburger',
                '$9.49',
                '1.1K',
                '56',
                '78',
                '990'
            )
        ]
    },
    {
        img: MilkshakesSectionImg,
        title: 'Milkshakes',
        items: [
            MenuItem(
                VanillaShakeImg,
                'Vanilla Milkshake',
                '$5.49',
                '50',
                '10',
                '5',
                '12'
            ),
            MenuItem(
                ChocolateShakeImg,
                'Chocolate Milkshake',
                '$5.49',
                '50',
                '10',
                '5',
                '12'
            ),
            MenuItem(
                StrawberryShakeImg,
                'Strawberry Milkshake',
                '$5.49',
                '50',
                '10',
                '5',
                '12'
            )
        ]
    },
    {
        img: FriesSectionImg,
        title: 'Fries',
        items: [
            MenuItem(
                FrenchFriesImg,
                'French Fries',
                '$2.59 - $5.59',
                '520 - 1.4K',
                '135',
                '47',
                '970'
            ),
            MenuItem(
                CurlyFriesImg,
                'Curly Fries',
                '$2.59 - $5.59',
                '520 - 1.4K',
                '135',
                '47',
                '970'
            )
        ]
    }
];

const createMenuPage = () => {
    const main = document.querySelector('main');
    main.className = 'main-menu';

    menu.forEach((menuSection) => {
        const section = document.createElement('section');
        section.classList.add(
            'menu-section',
            `menu-section-${menuSection.title.toLowerCase()}`
        );
        main.appendChild(section);

        const header = document.createElement('div');
        header.classList.add('menu-section-header');
        section.appendChild(header);

        const img = document.createElement('img');
        img.src = menuSection.img;
        header.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = menuSection.title;
        header.appendChild(title);

        const items = document.createElement('div');
        items.classList.add('menu-section-items');
        section.appendChild(items);

        menuSection.items.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
            items.appendChild(card);

            const cardHead = document.createElement('div');
            cardHead.classList.add('menu-card-head');
            card.appendChild(cardHead);

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('menu-card-title');
            cardHead.appendChild(cardTitle);

            const cardImg = document.createElement('img');
            cardImg.src = item.img;
            cardTitle.appendChild(cardImg);

            const cardName = document.createElement('p');
            cardName.textContent = item.name;
            cardName.classList.add('menu-card-name');
            cardTitle.appendChild(cardName);

            const cardPrice = document.createElement('p');
            cardPrice.textContent = item.price;
            cardPrice.classList.add('menu-card-price');
            cardHead.appendChild(cardPrice);

            const cardDescription = document.createElement('p');
            cardDescription.textContent = `Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Aliquam nulla ratione similique tenetur at 
            necessitatibus, natus, doloribus voluptas expedita ducimus 
            consequuntur reprehenderit error.`;
            cardDescription.classList.add('menu-card-description');
            card.appendChild(cardDescription);

            const cardNutrition = document.createElement('div');
            cardNutrition.classList.add('menu-card-nutrition');
            card.appendChild(cardNutrition);

            Object.keys(item.nutrition).forEach((key) => {
                const nutrition = document.createElement('div');
                cardNutrition.appendChild(nutrition);

                const value = document.createElement('p');
                value.textContent = item.nutrition[key];
                value.classList.add('nutrition-value');
                nutrition.appendChild(value);

                const label = document.createElement('p');
                label.classList.add('nutrition-label');
                nutrition.appendChild(label);

                if (key === 'calories') label.textContent = 'Calories';
                if (key === 'carbs') label.textContent = 'Carbs (g)';
                if (key === 'fat') label.textContent = 'Total Fat (g)';
                if (key === 'sodium') label.textContent = 'Sodium (mg)';
            });
        });
    });

    return main;
};

export default createMenuPage;
