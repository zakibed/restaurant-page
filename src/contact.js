const createInput = (text, type, name, placeholder) => {
    const container = document.createElement('div');
    container.classList.add('input-container');

    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = name;
    container.appendChild(label);

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.id = name;
    input.required = true;
    container.appendChild(input);

    return container;
};

const createContactPage = () => {
    const main = document.querySelector('main');
    main.className = 'main-contact';

    const detailsSection = document.createElement('section');
    detailsSection.classList.add('contact-details-section');
    main.appendChild(detailsSection);

    const detailsHeader = document.createElement('div');
    detailsHeader.classList.add('details-section-header');
    detailsSection.appendChild(detailsHeader);

    const detailsIcon = document.createElement('i');
    detailsIcon.classList.add('fa-solid', 'fa-list-ul');
    detailsHeader.appendChild(detailsIcon);

    const detailsTitle = document.createElement('h2');
    detailsTitle.textContent = 'Details';
    detailsHeader.appendChild(detailsTitle);

    const detailsText = document.createElement('p');
    detailsText.textContent = `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Nullam hendrerit sit amet justo eget pretium. Donec 
        ultricies sapien eu elit rutrum, nec vehicula lorem imperdiet.`;
    detailsSection.appendChild(detailsText);

    const detailsInfo = document.createElement('div');
    detailsInfo.classList.add('details-section-info');
    detailsSection.appendChild(detailsInfo);

    for (let i = 0; i < 4; i++) {
        const container = document.createElement('div');
        container.classList.add('info-container');
        detailsInfo.appendChild(container);

        const label = document.createElement('div');
        label.classList.add('info-label');
        container.appendChild(label);

        const icon = document.createElement('i');
        label.appendChild(icon);

        const name = document.createElement('p');
        name.classList.add('info-name');
        label.appendChild(name);

        const description = document.createElement('p');
        description.classList.add('info-description');
        container.appendChild(description);

        if (i === 0) {
            icon.classList.add('fa-regular', 'fa-hourglass-half');
            name.textContent = 'Opening Hours';

            const span = document.createElement('span');
            span.textContent = 'Mon - Fri:';
            description.appendChild(span);
            description.appendChild(
                document.createTextNode(' 11:00AM - 10:00PM')
            );
        } else if (i === 1) {
            icon.classList.add('fa-solid', 'fa-location-dot');
            name.textContent = 'Address';
            description.textContent = '297 Bleecker St. New York, NY 10015';
        } else if (i === 2) {
            icon.classList.add('fa-solid', 'fa-phone');
            name.textContent = 'Phone';
            description.textContent = '+1 234-567-8910';
        } else {
            icon.classList.add('fa-solid', 'fa-envelope');
            name.textContent = 'Email';
            description.textContent = 'info@turboshack.com';
        }
    }

    const messageSection = document.createElement('section');
    messageSection.classList.add('contact-message-section');
    main.appendChild(messageSection);

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-section-header');
    messageSection.appendChild(messageHeader);

    const messageIcon = document.createElement('i');
    messageIcon.classList.add('fa-regular', 'fa-comment-dots');
    messageHeader.appendChild(messageIcon);

    const messageTitle = document.createElement('h2');
    messageTitle.textContent = 'Send us a message!';
    messageHeader.appendChild(messageTitle);

    const form = document.createElement('form');
    form.classList.add('message-form');
    messageSection.appendChild(form);

    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            form.appendChild(
                createInput('Full Name', 'text', 'full-name', 'Your Name')
            );
        } else if (i === 1) {
            form.appendChild(
                createInput('Email', 'email', 'email', 'e.g. name@example.com')
            );
        } else if (i === 2) {
            form.appendChild(
                createInput('Subject', 'text', 'subject', 'Subject')
            );
        } else {
            form.appendChild(createInput('Message', 'text', 'message', '...'));

            const textarea = document.createElement('textarea');
            textarea.name = 'message';
            textarea.cols = '30';
            textarea.rows = '10';
            textarea.placeholder = '...';
            textarea.id = 'message';
            textarea.required = true;

            const input = document.querySelector('input#message');
            input.replaceWith(textarea);
        }
    }

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.classList.add('btn-submit');
    form.appendChild(submitBtn);

    const submitBtnIcon = document.createElement('i');
    submitBtnIcon.classList.add('fa-solid', 'fa-share-from-square');
    submitBtn.appendChild(submitBtnIcon);
    submitBtn.appendChild(document.createTextNode('Submit'));

    return main;
};

export default createContactPage;
