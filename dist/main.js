/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Montserrat:wght@600;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --clr-accent: #d62300;
    --clr-light1: #919191;
    --clr-light2: #727272;
    --clr-light3: #606060;
    --ff-primary: 'Inter', sans-serif;
    --ff-accent: 'Montserrat', sans-serif;
    --content-padding: 3rem;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: clamp(0.75rem, 0.9vw, 1.1rem);
}

body {
    font-family: var(--ff-primary);
    overflow-x: hidden;
}

h1,
h2 {
    font-weight: 900;
}

h1 {
    font-size: 5rem;
}

h2 {
    font-size: 2.5rem;
}

button {
    border: none;
    font-family: var(--ff-primary);
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: all 50ms ease-in;
}

.logo-name {
    font-family: var(--ff-accent);
    font-weight: 900;
}

.logo-name span {
    color: var(--clr-accent);
}

#content {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

/* header and nav */
header {
    border-bottom: 6px solid var(--clr-accent);
    padding: 1.5rem var(--content-padding);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

header::after {
    content: '';
    border-bottom: 5px solid black;
    background: black;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
}

.logo {
    font-size: 1.56rem;
    display: flex;
    align-items: center;
    gap: 0.3em;
}

.logo img {
    width: 1.6em;
    height: 1.6em;
}

.logo p {
    margin-top: 0.3em;
}

nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5em;
}

.nav-active .nav-btn {
    border-bottom-color: var(--clr-accent);
    color: black;
}

.nav-btn {
    border-bottom: 3px solid white;
    padding-bottom: 5px;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--clr-light1);
}

.nav-btn:hover {
    color: black;
}

.nav-btn i {
    margin-right: 5px;
    font-size: 1.22em;
}

/* footer */
footer {
    padding-top: 1.5rem;
    color: white;
    background: black;
    flex-shrink: 0;
    display: grid;
    grid-template: 1fr 1fr / 1fr auto;
}

footer a {
    text-decoration: none;
    color: white;
}

footer a:not(.footer-socials a):hover {
    text-decoration: underline;
}

footer i {
    font-size: 1.25rem;
}

.footer-socials {
    padding-left: var(--content-padding);
}

.footer-socials .logo-name,
.footer-info a:first-child {
    margin-bottom: 0.75em;
}

.footer-socials i {
    margin-right: 1em;
}

.footer-info {
    padding-right: var(--content-padding);
    font-weight: 900;
    text-align: right;
    justify-self: right;
}

.footer-info a {
    display: block;
    transition: all 0.5s ease-in;
}

.footer-info i {
    margin-left: 0.25em;
    transition: all 350ms ease-in;
}

.footer-info a:hover i {
    transform: rotate(360deg);
}

.footer-credit {
    margin-top: 1.5em;
    padding: 0.3em 0;
    text-align: center;
    background: var(--clr-accent);
    grid-column: span 2;
}

.footer-credit a:not(:first-child) {
    border-left: 1px solid white;
    margin-left: 0.3em;
    padding-left: 0.3em;
}

/* home page */
.main-home {
    padding: 4.5rem var(--content-padding);
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 40vw);
    gap: 2rem;
}

.intro-title {
    font-size: 5rem;
}

.intro-text {
    padding: 1.5em 0 2em;
    font-size: 1.25rem;
}

.home-intro-section button {
    border-radius: 50px;
    padding: 0.75em 1.7em;
    font-size: 1.25rem;
    font-weight: 900;
    gap: 0.45em;
}

.home-intro-section button i {
    font-size: 1.5em;
}

.btn-order-now {
    border: 4px solid black;
    color: white;
    background: var(--clr-accent);
}

.btn-order-now:hover,
.btn-submit:hover {
    background: black;
}

.btn-sign-up {
    color: var(--clr-accent);
}

.btn-sign-up:hover {
    color: black;
}

.home-img-section {
    justify-self: right;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-wrapper {
    max-width: 610px;
    max-height: 595px;
    padding: 5em;
    border: 10px dashed black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-wrapper img {
    max-width: 100%;
    display: block;
    position: relative;
    bottom: 1.5vw;
}

/* menu page */
.main-menu {
    padding: 4.5rem calc(var(--content-padding) * 2.5) 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}

.menu-section {
    margin: 0 auto;
}

.menu-section-header {
    width: max-content;
    margin: 0 auto 3.125em;
    padding: 0.75em 3em;
    border-bottom: 3px solid var(--clr-accent);
    display: flex;
    align-items: center;
    gap: 0.75em;
}

.menu-section-header img {
    width: 4.65em;
}

.menu-section-milkshakes .menu-section-header,
.menu-section-fries .menu-section-header {
    gap: 0.45em;
}

.menu-section-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.75em;
}

.menu-card {
    border: 3px solid black;
    border-radius: 7px;
    box-shadow: 12px 8px 25px rgba(0, 0, 0, 0.4);
}

.menu-card-head {
    padding: 0.8em 0.6em;
    font-family: var(--ff-accent);
    font-size: 1.75rem;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-card-title {
    display: flex;
    align-items: center;
    gap: 0.4em;
}

.menu-card-title img {
    width: 1.4em;
}

.menu-card-price {
    justify-self: right;
}

.menu-card-description {
    padding: 1em 1.125em;
    color: var(--clr-light3);
}

.menu-card-nutrition {
    padding: 0 1.125em 1.125em;
    font-family: var(--ff-accent);
    text-align: center;
    display: flex;
    gap: 1.56em;
}

.nutrition-value {
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--clr-light2);
}

.nutrition-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--clr-light2);
}

/* contact us page */
.main-contact {
    padding: 4.5rem var(--content-padding) 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
}

.details-section-header,
.message-section-header {
    width: max-content;
    border-bottom: 3px solid var(--clr-accent);
    margin-bottom: 2em;
    padding-right: 6em;
    padding-bottom: 0.5em;
    display: flex;
    align-items: center;
    gap: 0.6em;
}

.details-section-header i,
.message-section-header i {
    font-size: 2.125rem;
}

.contact-details-section > p {
    margin-bottom: 2.5em;
}

.details-section-info {
    display: flex;
    flex-direction: column;
    gap: 2.25em;
}

.info-container {
    width: 70%;
    font-weight: 900;
}

.info-label {
    border-bottom: 3px dashed black;
    margin-bottom: 0.72em;
    font-family: var(--ff-accent);
    font-size: 1.25rem;
    font-weight: 900;
    text-transform: uppercase;
}

.info-label i {
    margin-right: 0.2em;
    font-size: 1.375rem;
    color: var(--clr-accent);
}

.info-name {
    display: inline-block;
    vertical-align: 0.1em;
}

.info-description {
    font-size: 1.125rem;
    color: var(--clr-light1);
}

.info-container:first-child span {
    color: var(--clr-light3);
}

.message-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4em;
    column-gap: 2.65em;
}

.input-container:nth-last-child(2) {
    grid-column: span 2;
}

.input-container label {
    width: 100%;
    font-family: var(--ff-accent);
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
}

.input-container input,
.input-container textarea {
    width: 100%;
    border: none;
    border-bottom: 3px solid black;
    margin-top: 1em;
    padding-bottom: 0.5em;
    font-family: var(--ff-primary);
    font-size: 1rem;
}

.btn-submit {
    width: max-content;
    border: 4px solid black;
    border-radius: 50px;
    padding: 0.75em 2.5em;
    font-size: 1.15rem;
    font-weight: 900;
    color: white;
    background: var(--clr-accent);
    gap: 0.35em;
}

/* media queries */
@media (max-width: 970px) {
    .main-home {
        display: block;
    }

    .home-intro-section {
        text-align: center;
        grid-column: span 2;
    }

    .home-img-section {
        width: 100%;
        margin-top: 2em;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .img-wrapper {
        opacity: 0.25;
    }

    .main-menu {
        padding: 3rem 3rem 6.25rem;
    }
}

@media (max-width: 860px) {
    header {
        flex-direction: column;
        gap: 1.5em;
    }

    nav ul {
        gap: 1.5em;
    }

    .nav-btn i {
        width: 100%;
        margin-bottom: 0.25em;
    }

    .home-img-section {
        display: none;
    }

    .menu-card-head {
        flex-direction: column;
        align-items: start;
        gap: 0.4em;
    }
}

@media (max-width: 700px) {
    .main-contact,
    .message-form {
        grid-template-columns: 1fr;
    }

    .main-contact {
        gap: 5em;
    }

    .input-container:nth-last-child(2) {
        grid-column: span 1;
    }
}

@media (max-width: 620px) {
    .menu-section-header {
        padding: 0.75em 1.5em;
    }

    .menu-section-items {
        grid-template-columns: 1fr;
    }

    .details-section-header,
    .message-section-header {
        width: 100%;
        padding-right: 0;
    }
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Montserrat:wght@600;900&display=swap');\n\n:root {\n    --clr-accent: #d62300;\n    --clr-light1: #919191;\n    --clr-light2: #727272;\n    --clr-light3: #606060;\n    --ff-primary: 'Inter', sans-serif;\n    --ff-accent: 'Montserrat', sans-serif;\n    --content-padding: 3rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: clamp(0.75rem, 0.9vw, 1.1rem);\n}\n\nbody {\n    font-family: var(--ff-primary);\n    overflow-x: hidden;\n}\n\nh1,\nh2 {\n    font-weight: 900;\n}\n\nh1 {\n    font-size: 5rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nbutton {\n    border: none;\n    font-family: var(--ff-primary);\n    background: none;\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    transition: all 50ms ease-in;\n}\n\n.logo-name {\n    font-family: var(--ff-accent);\n    font-weight: 900;\n}\n\n.logo-name span {\n    color: var(--clr-accent);\n}\n\n#content {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nmain {\n    flex: 1 0 auto;\n}\n\n/* header and nav */\nheader {\n    border-bottom: 6px solid var(--clr-accent);\n    padding: 1.5rem var(--content-padding);\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n}\n\nheader::after {\n    content: '';\n    border-bottom: 5px solid black;\n    background: black;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -10px;\n}\n\n.logo {\n    font-size: 1.56rem;\n    display: flex;\n    align-items: center;\n    gap: 0.3em;\n}\n\n.logo img {\n    width: 1.6em;\n    height: 1.6em;\n}\n\n.logo p {\n    margin-top: 0.3em;\n}\n\nnav ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 2.5em;\n}\n\n.nav-active .nav-btn {\n    border-bottom-color: var(--clr-accent);\n    color: black;\n}\n\n.nav-btn {\n    border-bottom: 3px solid white;\n    padding-bottom: 5px;\n    font-size: 1.125rem;\n    font-weight: 700;\n    color: var(--clr-light1);\n}\n\n.nav-btn:hover {\n    color: black;\n}\n\n.nav-btn i {\n    margin-right: 5px;\n    font-size: 1.22em;\n}\n\n/* footer */\nfooter {\n    padding-top: 1.5rem;\n    color: white;\n    background: black;\n    flex-shrink: 0;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr auto;\n}\n\nfooter a {\n    text-decoration: none;\n    color: white;\n}\n\nfooter a:not(.footer-socials a):hover {\n    text-decoration: underline;\n}\n\nfooter i {\n    font-size: 1.25rem;\n}\n\n.footer-socials {\n    padding-left: var(--content-padding);\n}\n\n.footer-socials .logo-name,\n.footer-info a:first-child {\n    margin-bottom: 0.75em;\n}\n\n.footer-socials i {\n    margin-right: 1em;\n}\n\n.footer-info {\n    padding-right: var(--content-padding);\n    font-weight: 900;\n    text-align: right;\n    justify-self: right;\n}\n\n.footer-info a {\n    display: block;\n    transition: all 0.5s ease-in;\n}\n\n.footer-info i {\n    margin-left: 0.25em;\n    transition: all 350ms ease-in;\n}\n\n.footer-info a:hover i {\n    transform: rotate(360deg);\n}\n\n.footer-credit {\n    margin-top: 1.5em;\n    padding: 0.3em 0;\n    text-align: center;\n    background: var(--clr-accent);\n    grid-column: span 2;\n}\n\n.footer-credit a:not(:first-child) {\n    border-left: 1px solid white;\n    margin-left: 0.3em;\n    padding-left: 0.3em;\n}\n\n/* home page */\n.main-home {\n    padding: 4.5rem var(--content-padding);\n    display: grid;\n    grid-template-columns: 1fr minmax(min-content, 40vw);\n    gap: 2rem;\n}\n\n.intro-title {\n    font-size: 5rem;\n}\n\n.intro-text {\n    padding: 1.5em 0 2em;\n    font-size: 1.25rem;\n}\n\n.home-intro-section button {\n    border-radius: 50px;\n    padding: 0.75em 1.7em;\n    font-size: 1.25rem;\n    font-weight: 900;\n    gap: 0.45em;\n}\n\n.home-intro-section button i {\n    font-size: 1.5em;\n}\n\n.btn-order-now {\n    border: 4px solid black;\n    color: white;\n    background: var(--clr-accent);\n}\n\n.btn-order-now:hover,\n.btn-submit:hover {\n    background: black;\n}\n\n.btn-sign-up {\n    color: var(--clr-accent);\n}\n\n.btn-sign-up:hover {\n    color: black;\n}\n\n.home-img-section {\n    justify-self: right;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-wrapper {\n    max-width: 610px;\n    max-height: 595px;\n    padding: 5em;\n    border: 10px dashed black;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-wrapper img {\n    max-width: 100%;\n    display: block;\n    position: relative;\n    bottom: 1.5vw;\n}\n\n/* menu page */\n.main-menu {\n    padding: 4.5rem calc(var(--content-padding) * 2.5) 6.25rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4.5rem;\n}\n\n.menu-section {\n    margin: 0 auto;\n}\n\n.menu-section-header {\n    width: max-content;\n    margin: 0 auto 3.125em;\n    padding: 0.75em 3em;\n    border-bottom: 3px solid var(--clr-accent);\n    display: flex;\n    align-items: center;\n    gap: 0.75em;\n}\n\n.menu-section-header img {\n    width: 4.65em;\n}\n\n.menu-section-milkshakes .menu-section-header,\n.menu-section-fries .menu-section-header {\n    gap: 0.45em;\n}\n\n.menu-section-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2.75em;\n}\n\n.menu-card {\n    border: 3px solid black;\n    border-radius: 7px;\n    box-shadow: 12px 8px 25px rgba(0, 0, 0, 0.4);\n}\n\n.menu-card-head {\n    padding: 0.8em 0.6em;\n    font-family: var(--ff-accent);\n    font-size: 1.75rem;\n    font-weight: 900;\n    text-transform: uppercase;\n    color: white;\n    background: black;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-card-title {\n    display: flex;\n    align-items: center;\n    gap: 0.4em;\n}\n\n.menu-card-title img {\n    width: 1.4em;\n}\n\n.menu-card-price {\n    justify-self: right;\n}\n\n.menu-card-description {\n    padding: 1em 1.125em;\n    color: var(--clr-light3);\n}\n\n.menu-card-nutrition {\n    padding: 0 1.125em 1.125em;\n    font-family: var(--ff-accent);\n    text-align: center;\n    display: flex;\n    gap: 1.56em;\n}\n\n.nutrition-value {\n    font-size: 1.25rem;\n    font-weight: 900;\n    color: var(--clr-light2);\n}\n\n.nutrition-label {\n    font-size: 0.875rem;\n    font-weight: 600;\n    color: var(--clr-light2);\n}\n\n/* contact us page */\n.main-contact {\n    padding: 4.5rem var(--content-padding) 6rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2em;\n}\n\n.details-section-header,\n.message-section-header {\n    width: max-content;\n    border-bottom: 3px solid var(--clr-accent);\n    margin-bottom: 2em;\n    padding-right: 6em;\n    padding-bottom: 0.5em;\n    display: flex;\n    align-items: center;\n    gap: 0.6em;\n}\n\n.details-section-header i,\n.message-section-header i {\n    font-size: 2.125rem;\n}\n\n.contact-details-section > p {\n    margin-bottom: 2.5em;\n}\n\n.details-section-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2.25em;\n}\n\n.info-container {\n    width: 70%;\n    font-weight: 900;\n}\n\n.info-label {\n    border-bottom: 3px dashed black;\n    margin-bottom: 0.72em;\n    font-family: var(--ff-accent);\n    font-size: 1.25rem;\n    font-weight: 900;\n    text-transform: uppercase;\n}\n\n.info-label i {\n    margin-right: 0.2em;\n    font-size: 1.375rem;\n    color: var(--clr-accent);\n}\n\n.info-name {\n    display: inline-block;\n    vertical-align: 0.1em;\n}\n\n.info-description {\n    font-size: 1.125rem;\n    color: var(--clr-light1);\n}\n\n.info-container:first-child span {\n    color: var(--clr-light3);\n}\n\n.message-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 4em;\n    column-gap: 2.65em;\n}\n\n.input-container:nth-last-child(2) {\n    grid-column: span 2;\n}\n\n.input-container label {\n    width: 100%;\n    font-family: var(--ff-accent);\n    font-size: 1.125rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    display: block;\n}\n\n.input-container input,\n.input-container textarea {\n    width: 100%;\n    border: none;\n    border-bottom: 3px solid black;\n    margin-top: 1em;\n    padding-bottom: 0.5em;\n    font-family: var(--ff-primary);\n    font-size: 1rem;\n}\n\n.btn-submit {\n    width: max-content;\n    border: 4px solid black;\n    border-radius: 50px;\n    padding: 0.75em 2.5em;\n    font-size: 1.15rem;\n    font-weight: 900;\n    color: white;\n    background: var(--clr-accent);\n    gap: 0.35em;\n}\n\n/* media queries */\n@media (max-width: 970px) {\n    .main-home {\n        display: block;\n    }\n\n    .home-intro-section {\n        text-align: center;\n        grid-column: span 2;\n    }\n\n    .home-img-section {\n        width: 100%;\n        margin-top: 2em;\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    .img-wrapper {\n        opacity: 0.25;\n    }\n\n    .main-menu {\n        padding: 3rem 3rem 6.25rem;\n    }\n}\n\n@media (max-width: 860px) {\n    header {\n        flex-direction: column;\n        gap: 1.5em;\n    }\n\n    nav ul {\n        gap: 1.5em;\n    }\n\n    .nav-btn i {\n        width: 100%;\n        margin-bottom: 0.25em;\n    }\n\n    .home-img-section {\n        display: none;\n    }\n\n    .menu-card-head {\n        flex-direction: column;\n        align-items: start;\n        gap: 0.4em;\n    }\n}\n\n@media (max-width: 700px) {\n    .main-contact,\n    .message-form {\n        grid-template-columns: 1fr;\n    }\n\n    .main-contact {\n        gap: 5em;\n    }\n\n    .input-container:nth-last-child(2) {\n        grid-column: span 1;\n    }\n}\n\n@media (max-width: 620px) {\n    .menu-section-header {\n        padding: 0.75em 1.5em;\n    }\n\n    .menu-section-items {\n        grid-template-columns: 1fr;\n    }\n\n    .details-section-header,\n    .message-section-header {\n        width: 100%;\n        padding-right: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_burger_shake_fries_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/burger-shake-fries.png */ "./src/assets/burger-shake-fries.png");


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
    homeImg.src = _assets_burger_shake_fries_png__WEBPACK_IMPORTED_MODULE_0__;
    imgWrapper.appendChild(homeImg);

    return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_burgers_section_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/burgers-section.png */ "./src/assets/burgers-section.png");
/* harmony import */ var _assets_milkshakes_section_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/milkshakes-section.png */ "./src/assets/milkshakes-section.png");
/* harmony import */ var _assets_fries_section_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fries-section.png */ "./src/assets/fries-section.png");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/hamburger.png */ "./src/assets/hamburger.png");
/* harmony import */ var _assets_cheeseburger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cheeseburger.png */ "./src/assets/cheeseburger.png");
/* harmony import */ var _assets_bacon_burger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bacon-burger.png */ "./src/assets/bacon-burger.png");
/* harmony import */ var _assets_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/double-cheeseburger.png */ "./src/assets/double-cheeseburger.png");
/* harmony import */ var _assets_vanilla_milkshake_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/vanilla-milkshake.png */ "./src/assets/vanilla-milkshake.png");
/* harmony import */ var _assets_chocolate_milkshake_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/chocolate-milkshake.png */ "./src/assets/chocolate-milkshake.png");
/* harmony import */ var _assets_strawberry_milkshake_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/strawberry-milkshake.png */ "./src/assets/strawberry-milkshake.png");
/* harmony import */ var _assets_french_fries_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/french-fries.png */ "./src/assets/french-fries.png");
/* harmony import */ var _assets_curly_fries_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/curly-fries.png */ "./src/assets/curly-fries.png");













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
        img: _assets_burgers_section_png__WEBPACK_IMPORTED_MODULE_0__,
        title: 'Burgers',
        items: [
            MenuItem(
                _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__,
                'Hamburger',
                '$6.99',
                '900',
                '54',
                '58',
                '440'
            ),
            MenuItem(
                _assets_cheeseburger_png__WEBPACK_IMPORTED_MODULE_4__,
                'Cheeseburger',
                '$7.49',
                '950',
                '56',
                '65',
                '780'
            ),
            MenuItem(
                _assets_bacon_burger_png__WEBPACK_IMPORTED_MODULE_5__,
                'Bacon Burger',
                '$7.85',
                '930',
                '55',
                '62',
                '590'
            ),
            MenuItem(
                _assets_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_6__,
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
        img: _assets_milkshakes_section_png__WEBPACK_IMPORTED_MODULE_1__,
        title: 'Milkshakes',
        items: [
            MenuItem(
                _assets_vanilla_milkshake_png__WEBPACK_IMPORTED_MODULE_7__,
                'Vanilla Milkshake',
                '$5.49',
                '50',
                '10',
                '5',
                '12'
            ),
            MenuItem(
                _assets_chocolate_milkshake_png__WEBPACK_IMPORTED_MODULE_8__,
                'Chocolate Milkshake',
                '$5.49',
                '50',
                '10',
                '5',
                '12'
            ),
            MenuItem(
                _assets_strawberry_milkshake_png__WEBPACK_IMPORTED_MODULE_9__,
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
        img: _assets_fries_section_png__WEBPACK_IMPORTED_MODULE_2__,
        title: 'Fries',
        items: [
            MenuItem(
                _assets_french_fries_png__WEBPACK_IMPORTED_MODULE_10__,
                'French Fries',
                '$2.59 - $5.59',
                '520 - 1.4K',
                '135',
                '47',
                '970'
            ),
            MenuItem(
                _assets_curly_fries_png__WEBPACK_IMPORTED_MODULE_11__,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);


/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");





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
    logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__;
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
            main.replaceWith((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
            break;
        case 'Contact Us':
            main.replaceWith((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
            break;
        default:
            main.replaceWith((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
            break;
    }

    const homeBtn = document.querySelector('nav li:first-child .nav-btn');
    const menuBtn = document.querySelector('nav li:nth-child(2) .nav-btn');
    const contactBtn = document.querySelector('nav li:last-child .nav-btn');

    homeBtn.addEventListener('click', () => createPage('Home'));
    menuBtn.addEventListener('click', () => createPage('Menu'));
    contactBtn.addEventListener('click', () => createPage('Contact Us'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);


/***/ }),

/***/ "./src/assets/bacon-burger.png":
/*!*************************************!*\
  !*** ./src/assets/bacon-burger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a5b684dbdbc9080fa31d.png";

/***/ }),

/***/ "./src/assets/burger-shake-fries.png":
/*!*******************************************!*\
  !*** ./src/assets/burger-shake-fries.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c60ae0a294352255776a.png";

/***/ }),

/***/ "./src/assets/burgers-section.png":
/*!****************************************!*\
  !*** ./src/assets/burgers-section.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9d17de3c8d5715a6e595.png";

/***/ }),

/***/ "./src/assets/cheeseburger.png":
/*!*************************************!*\
  !*** ./src/assets/cheeseburger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6875928362584a30d9b4.png";

/***/ }),

/***/ "./src/assets/chocolate-milkshake.png":
/*!********************************************!*\
  !*** ./src/assets/chocolate-milkshake.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b1a029e97889530d4801.png";

/***/ }),

/***/ "./src/assets/curly-fries.png":
/*!************************************!*\
  !*** ./src/assets/curly-fries.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bddefea2208ba3d5e0fb.png";

/***/ }),

/***/ "./src/assets/double-cheeseburger.png":
/*!********************************************!*\
  !*** ./src/assets/double-cheeseburger.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/db4ac69089758a5d14cd.png";

/***/ }),

/***/ "./src/assets/french-fries.png":
/*!*************************************!*\
  !*** ./src/assets/french-fries.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/53707fd85a60dbeef77e.png";

/***/ }),

/***/ "./src/assets/fries-section.png":
/*!**************************************!*\
  !*** ./src/assets/fries-section.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/038e2a5e078f273ef6ce.png";

/***/ }),

/***/ "./src/assets/hamburger.png":
/*!**********************************!*\
  !*** ./src/assets/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/356462e7839e4203ba1b.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a406e5189a08a42044fb.png";

/***/ }),

/***/ "./src/assets/milkshakes-section.png":
/*!*******************************************!*\
  !*** ./src/assets/milkshakes-section.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/86f147d7a3202c6bd869.png";

/***/ }),

/***/ "./src/assets/strawberry-milkshake.png":
/*!*********************************************!*\
  !*** ./src/assets/strawberry-milkshake.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bf92a946324a13170640.png";

/***/ }),

/***/ "./src/assets/vanilla-milkshake.png":
/*!******************************************!*\
  !*** ./src/assets/vanilla-milkshake.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/34e25b51b261da1bbc1c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");



(0,_page__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLCtCQUErQixrQkFBa0I7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtFQUErRSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkoxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDWjs7QUFFcEIsaURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs3MDA7OTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANjAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWNsci1hY2NlbnQ6ICNkNjIzMDA7XG4gICAgLS1jbHItbGlnaHQxOiAjOTE5MTkxO1xuICAgIC0tY2xyLWxpZ2h0MjogIzcyNzI3MjtcbiAgICAtLWNsci1saWdodDM6ICM2MDYwNjA7XG4gICAgLS1mZi1wcmltYXJ5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICAgIC0tZmYtYWNjZW50OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDNyZW07XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjc1cmVtLCAwLjl2dywgMS4xcmVtKTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuaDEsXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLWluO1xufVxuXG4ubG9nby1uYW1lIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4ubG9nby1uYW1lIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYWluIHtcbiAgICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLyogaGVhZGVyIGFuZCBuYXYgKi9cbmhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHZhcigtLWNsci1hY2NlbnQpO1xuICAgIHBhZGRpbmc6IDEuNXJlbSB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDEuNTZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4zZW07XG59XG5cbi5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEuNmVtO1xuICAgIGhlaWdodDogMS42ZW07XG59XG5cbi5sb2dvIHAge1xuICAgIG1hcmdpbi10b3A6IDAuM2VtO1xufVxuXG5uYXYgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMi41ZW07XG59XG5cbi5uYXYtYWN0aXZlIC5uYXYtYnRuIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXYtYnRuIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodDEpO1xufVxuXG4ubmF2LWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2LWJ0biBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEuMjJlbTtcbn1cblxuLyogZm9vdGVyICovXG5mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciBhdXRvO1xufVxuXG5mb290ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9vdGVyIGE6bm90KC5mb290ZXItc29jaWFscyBhKTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmZvb3RlciBpIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5mb290ZXItc29jaWFscyB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xufVxuXG4uZm9vdGVyLXNvY2lhbHMgLmxvZ28tbmFtZSxcbi5mb290ZXItaW5mbyBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbi5mb290ZXItc29jaWFscyBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmZvb3Rlci1pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cblxuLmZvb3Rlci1pbmZvIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5mb290ZXItaW5mbyBpIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNWVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluO1xufVxuXG4uZm9vdGVyLWluZm8gYTpob3ZlciBpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4uZm9vdGVyLWNyZWRpdCB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgcGFkZGluZzogMC4zZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1cblxuLmZvb3Rlci1jcmVkaXQgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMC4zZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjNlbTtcbn1cblxuLyogaG9tZSBwYWdlICovXG4ubWFpbi1ob21lIHtcbiAgICBwYWRkaW5nOiA0LjVyZW0gdmFyKC0tY29udGVudC1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heChtaW4tY29udGVudCwgNDB2dyk7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uaW50cm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLmludHJvLXRleHQge1xuICAgIHBhZGRpbmc6IDEuNWVtIDAgMmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmhvbWUtaW50cm8tc2VjdGlvbiBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMC43NWVtIDEuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGdhcDogMC40NWVtO1xufVxuXG4uaG9tZS1pbnRyby1zZWN0aW9uIGJ1dHRvbiBpIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uYnRuLW9yZGVyLW5vdyB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1hY2NlbnQpO1xufVxuXG4uYnRuLW9yZGVyLW5vdzpob3Zlcixcbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmJ0bi1zaWduLXVwIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG59XG5cbi5idG4tc2lnbi11cDpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaG9tZS1pbWctc2VjdGlvbiB7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWctd3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiA2MTBweDtcbiAgICBtYXgtaGVpZ2h0OiA1OTVweDtcbiAgICBwYWRkaW5nOiA1ZW07XG4gICAgYm9yZGVyOiAxMHB4IGRhc2hlZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1nLXdyYXBwZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMS41dnc7XG59XG5cbi8qIG1lbnUgcGFnZSAqL1xuLm1haW4tbWVudSB7XG4gICAgcGFkZGluZzogNC41cmVtIGNhbGModmFyKC0tY29udGVudC1wYWRkaW5nKSAqIDIuNSkgNi4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDQuNXJlbTtcbn1cblxuLm1lbnUtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tZW51LXNlY3Rpb24taGVhZGVyIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gMy4xMjVlbTtcbiAgICBwYWRkaW5nOiAwLjc1ZW0gM2VtO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1ZW07XG59XG5cbi5tZW51LXNlY3Rpb24taGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDQuNjVlbTtcbn1cblxuLm1lbnUtc2VjdGlvbi1taWxrc2hha2VzIC5tZW51LXNlY3Rpb24taGVhZGVyLFxuLm1lbnUtc2VjdGlvbi1mcmllcyAubWVudS1zZWN0aW9uLWhlYWRlciB7XG4gICAgZ2FwOiAwLjQ1ZW07XG59XG5cbi5tZW51LXNlY3Rpb24taXRlbXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMi43NWVtO1xufVxuXG4ubWVudS1jYXJkIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMTJweCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tZW51LWNhcmQtaGVhZCB7XG4gICAgcGFkZGluZzogMC44ZW0gMC42ZW07XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC40ZW07XG59XG5cbi5tZW51LWNhcmQtdGl0bGUgaW1nIHtcbiAgICB3aWR0aDogMS40ZW07XG59XG5cbi5tZW51LWNhcmQtcHJpY2Uge1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5tZW51LWNhcmQtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDFlbSAxLjEyNWVtO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQzKTtcbn1cblxuLm1lbnUtY2FyZC1udXRyaXRpb24ge1xuICAgIHBhZGRpbmc6IDAgMS4xMjVlbSAxLjEyNWVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS41NmVtO1xufVxuXG4ubnV0cml0aW9uLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0Mik7XG59XG5cbi5udXRyaXRpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0Mik7XG59XG5cbi8qIGNvbnRhY3QgdXMgcGFnZSAqL1xuLm1haW4tY29udGFjdCB7XG4gICAgcGFkZGluZzogNC41cmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZykgNnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDJlbTtcbn1cblxuLmRldGFpbHMtc2VjdGlvbi1oZWFkZXIsXG4ubWVzc2FnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgcGFkZGluZy1yaWdodDogNmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZlbTtcbn1cblxuLmRldGFpbHMtc2VjdGlvbi1oZWFkZXIgaSxcbi5tZXNzYWdlLXNlY3Rpb24taGVhZGVyIGkge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG59XG5cbi5jb250YWN0LWRldGFpbHMtc2VjdGlvbiA+IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG4uZGV0YWlscy1zZWN0aW9uLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuMjVlbTtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5pbmZvLWxhYmVsIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggZGFzaGVkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzJlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW5mby1sYWJlbCBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xufVxuXG4uaW5mby1uYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IDAuMWVtO1xufVxuXG4uaW5mby1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0MSk7XG59XG5cbi5pbmZvLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0Myk7XG59XG5cbi5tZXNzYWdlLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHJvdy1nYXA6IDRlbTtcbiAgICBjb2x1bW4tZ2FwOiAyLjY1ZW07XG59XG5cbi5pbnB1dC1jb250YWluZXI6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMC43NWVtIDIuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBnYXA6IDAuMzVlbTtcbn1cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XG4gICAgLm1haW4taG9tZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5ob21lLWludHJvLXNlY3Rpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgfVxuXG4gICAgLmhvbWUtaW1nLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgIH1cblxuICAgIC5tYWluLW1lbnUge1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDNyZW0gNi4yNXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMS41ZW07XG4gICAgfVxuXG4gICAgbmF2IHVsIHtcbiAgICAgICAgZ2FwOiAxLjVlbTtcbiAgICB9XG5cbiAgICAubmF2LWJ0biBpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbiAgICB9XG5cbiAgICAuaG9tZS1pbWctc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1lbnUtY2FyZC1oZWFkIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICBnYXA6IDAuNGVtO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLm1haW4tY29udGFjdCxcbiAgICAubWVzc2FnZS1mb3JtIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFjdCB7XG4gICAgICAgIGdhcDogNWVtO1xuICAgIH1cblxuICAgIC5pbnB1dC1jb250YWluZXI6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICAgLm1lbnUtc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwLjc1ZW0gMS41ZW07XG4gICAgfVxuXG4gICAgLm1lbnUtc2VjdGlvbi1pdGVtcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXNlY3Rpb24taGVhZGVyLFxuICAgIC5tZXNzYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyx1QkFBdUI7QUFDM0I7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSwwQ0FBMEM7SUFDMUMsc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtC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OztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBOztRQUVJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs3MDA7OTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANjAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tY2xyLWFjY2VudDogI2Q2MjMwMDtcXG4gICAgLS1jbHItbGlnaHQxOiAjOTE5MTkxO1xcbiAgICAtLWNsci1saWdodDI6ICM3MjcyNzI7XFxuICAgIC0tY2xyLWxpZ2h0MzogIzYwNjA2MDtcXG4gICAgLS1mZi1wcmltYXJ5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICAtLWZmLWFjY2VudDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbnRlbnQtcGFkZGluZzogM3JlbTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIDAuOXZ3LCAxLjFyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4ubG9nby1uYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5sb2dvLW5hbWUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi8qIGhlYWRlciBhbmQgbmF2ICovXFxuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHZhcigtLWNsci1hY2NlbnQpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gdmFyKC0tY29udGVudC1wYWRkaW5nKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS41NnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDEuNmVtO1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbn1cXG5cXG4ubG9nbyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMC4zZW07XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi41ZW07XFxufVxcblxcbi5uYXYtYWN0aXZlIC5uYXYtYnRuIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQxKTtcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjIyZW07XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIGF1dG87XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciBhOm5vdCguZm9vdGVyLXNvY2lhbHMgYSk6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5mb290ZXItc29jaWFscyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tY29udGVudC1wYWRkaW5nKTtcXG59XFxuXFxuLmZvb3Rlci1zb2NpYWxzIC5sb2dvLW5hbWUsXFxuLmZvb3Rlci1pbmZvIGE6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XFxufVxcblxcbi5mb290ZXItc29jaWFscyBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mb290ZXItaW5mbyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1ZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gYTpob3ZlciBpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuXFxuLmZvb3Rlci1jcmVkaXQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gICAgcGFkZGluZzogMC4zZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYWNjZW50KTtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLmZvb3Rlci1jcmVkaXQgYTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjNlbTtcXG59XFxuXFxuLyogaG9tZSBwYWdlICovXFxuLm1haW4taG9tZSB7XFxuICAgIHBhZGRpbmc6IDQuNXJlbSB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgobWluLWNvbnRlbnQsIDQwdncpO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmludHJvLXRleHQge1xcbiAgICBwYWRkaW5nOiAxLjVlbSAwIDJlbTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1pbnRyby1zZWN0aW9uIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDAuNzVlbSAxLjdlbTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBnYXA6IDAuNDVlbTtcXG59XFxuXFxuLmhvbWUtaW50cm8tc2VjdGlvbiBidXR0b24gaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5idG4tb3JkZXItbm93IHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XFxufVxcblxcbi5idG4tb3JkZXItbm93OmhvdmVyLFxcbi5idG4tc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbi5idG4tc2lnbi11cCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG59XFxuXFxuLmJ0bi1zaWduLXVwOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaG9tZS1pbWctc2VjdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDYxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1OTVweDtcXG4gICAgcGFkZGluZzogNWVtO1xcbiAgICBib3JkZXI6IDEwcHggZGFzaGVkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nLXdyYXBwZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEuNXZ3O1xcbn1cXG5cXG4vKiBtZW51IHBhZ2UgKi9cXG4ubWFpbi1tZW51IHtcXG4gICAgcGFkZGluZzogNC41cmVtIGNhbGModmFyKC0tY29udGVudC1wYWRkaW5nKSAqIDIuNSkgNi4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0LjVyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lbnUtc2VjdGlvbi1oZWFkZXIge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMCBhdXRvIDMuMTI1ZW07XFxuICAgIHBhZGRpbmc6IDAuNzVlbSAzZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1ZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24taGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiA0LjY1ZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24tbWlsa3NoYWtlcyAubWVudS1zZWN0aW9uLWhlYWRlcixcXG4ubWVudS1zZWN0aW9uLWZyaWVzIC5tZW51LXNlY3Rpb24taGVhZGVyIHtcXG4gICAgZ2FwOiAwLjQ1ZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24taXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMi43NWVtO1xcbn1cXG5cXG4ubWVudS1jYXJkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm94LXNoYWRvdzogMTJweCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tZW51LWNhcmQtaGVhZCB7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDAuNmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNhcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNGVtO1xcbn1cXG5cXG4ubWVudS1jYXJkLXRpdGxlIGltZyB7XFxuICAgIHdpZHRoOiAxLjRlbTtcXG59XFxuXFxuLm1lbnUtY2FyZC1wcmljZSB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5tZW51LWNhcmQtZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxZW0gMS4xMjVlbTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodDMpO1xcbn1cXG5cXG4ubWVudS1jYXJkLW51dHJpdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAgMS4xMjVlbSAxLjEyNWVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNTZlbTtcXG59XFxuXFxuLm51dHJpdGlvbi12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodDIpO1xcbn1cXG5cXG4ubnV0cml0aW9uLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodDIpO1xcbn1cXG5cXG4vKiBjb250YWN0IHVzIHBhZ2UgKi9cXG4ubWFpbi1jb250YWN0IHtcXG4gICAgcGFkZGluZzogNC41cmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZykgNnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDJlbTtcXG59XFxuXFxuLmRldGFpbHMtc2VjdGlvbi1oZWFkZXIsXFxuLm1lc3NhZ2Utc2VjdGlvbi1oZWFkZXIge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZlbTtcXG59XFxuXFxuLmRldGFpbHMtc2VjdGlvbi1oZWFkZXIgaSxcXG4ubWVzc2FnZS1zZWN0aW9uLWhlYWRlciBpIHtcXG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscy1zZWN0aW9uID4gcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xcbn1cXG5cXG4uZGV0YWlscy1zZWN0aW9uLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIuMjVlbTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZGFzaGVkIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjcyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5pbmZvLWxhYmVsIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxufVxcblxcbi5pbmZvLW5hbWUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiAwLjFlbTtcXG59XFxuXFxuLmluZm8tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0MSk7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodDMpO1xcbn1cXG5cXG4ubWVzc2FnZS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiA0ZW07XFxuICAgIGNvbHVtbi1nYXA6IDIuNjVlbTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lcjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idG4tc3VibWl0IHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgcGFkZGluZzogMC43NWVtIDIuNWVtO1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XFxuICAgIGdhcDogMC4zNWVtO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxuICAgIC5tYWluLWhvbWUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUtaW50cm8tc2VjdGlvbiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICB9XFxuXFxuICAgIC5ob21lLWltZy1zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5pbWctd3JhcHBlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLW1lbnUge1xcbiAgICAgICAgcGFkZGluZzogM3JlbSAzcmVtIDYuMjVyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxLjVlbTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwge1xcbiAgICAgICAgZ2FwOiAxLjVlbTtcXG4gICAgfVxcblxcbiAgICAubmF2LWJ0biBpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xcbiAgICB9XFxuXFxuICAgIC5ob21lLWltZy1zZWN0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtY2FyZC1oZWFkIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBnYXA6IDAuNGVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAubWFpbi1jb250YWN0LFxcbiAgICAubWVzc2FnZS1mb3JtIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRhY3Qge1xcbiAgICAgICAgZ2FwOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LWNvbnRhaW5lcjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcbiAgICAubWVudS1zZWN0aW9uLWhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAwLjc1ZW0gMS41ZW07XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtc2VjdGlvbi1pdGVtcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAuZGV0YWlscy1zZWN0aW9uLWhlYWRlcixcXG4gICAgLm1lc3NhZ2Utc2VjdGlvbi1oZWFkZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlSW5wdXQgPSAodGV4dCwgdHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxhYmVsLmh0bWxGb3IgPSBuYW1lO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhY3QnO1xuXG4gICAgY29uc3QgZGV0YWlsc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgZGV0YWlsc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLXNlY3Rpb24nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRldGFpbHNTZWN0aW9uKTtcblxuICAgIGNvbnN0IGRldGFpbHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc2VjdGlvbi1oZWFkZXInKTtcbiAgICBkZXRhaWxzU2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzSGVhZGVyKTtcblxuICAgIGNvbnN0IGRldGFpbHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGRldGFpbHNJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWxpc3QtdWwnKTtcbiAgICBkZXRhaWxzSGVhZGVyLmFwcGVuZENoaWxkKGRldGFpbHNJY29uKTtcblxuICAgIGNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gJ0RldGFpbHMnO1xuICAgIGRldGFpbHNIZWFkZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RpdGxlKTtcblxuICAgIGNvbnN0IGRldGFpbHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBcbiAgICAgICAgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gaGVuZHJlcml0IHNpdCBhbWV0IGp1c3RvIGVnZXQgcHJldGl1bS4gRG9uZWMgXG4gICAgICAgIHVsdHJpY2llcyBzYXBpZW4gZXUgZWxpdCBydXRydW0sIG5lYyB2ZWhpY3VsYSBsb3JlbSBpbXBlcmRpZXQuYDtcbiAgICBkZXRhaWxzU2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzVGV4dCk7XG5cbiAgICBjb25zdCBkZXRhaWxzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNJbmZvLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc2VjdGlvbi1pbmZvJyk7XG4gICAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZGV0YWlsc0luZm8pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicpO1xuICAgICAgICBkZXRhaWxzSW5mby5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2luZm8tbGFiZWwnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2luZm8tbmFtZScpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaW5mby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtaG91cmdsYXNzLWhhbGYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnT3BlbmluZyBIb3Vycyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ01vbiAtIEZyaTonO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIDExOjAwQU0gLSAxMDowMFBNJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1sb2NhdGlvbi1kb3QnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcyOTcgQmxlZWNrZXIgU3QuIE5ldyBZb3JrLCBOWSAxMDAxNSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1waG9uZScpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdQaG9uZSc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcrMSAyMzQtNTY3LTg5MTAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbnZlbG9wZScpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdFbWFpbCc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdpbmZvQHR1cmJvc2hhY2suY29tJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lc3NhZ2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbWVzc2FnZS1zZWN0aW9uJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZXNzYWdlU2VjdGlvbik7XG5cbiAgICBjb25zdCBtZXNzYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXNlY3Rpb24taGVhZGVyJyk7XG4gICAgbWVzc2FnZVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVzc2FnZUhlYWRlcik7XG5cbiAgICBjb25zdCBtZXNzYWdlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBtZXNzYWdlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLWNvbW1lbnQtZG90cycpO1xuICAgIG1lc3NhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUljb24pO1xuXG4gICAgY29uc3QgbWVzc2FnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZXNzYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnU2VuZCB1cyBhIG1lc3NhZ2UhJztcbiAgICBtZXNzYWdlSGVhZGVyLmFwcGVuZENoaWxkKG1lc3NhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1mb3JtJyk7XG4gICAgbWVzc2FnZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGVJbnB1dCgnRnVsbCBOYW1lJywgJ3RleHQnLCAnZnVsbC1uYW1lJywgJ1lvdXIgTmFtZScpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5wdXQoJ0VtYWlsJywgJ2VtYWlsJywgJ2VtYWlsJywgJ2UuZy4gbmFtZUBleGFtcGxlLmNvbScpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5wdXQoJ1N1YmplY3QnLCAndGV4dCcsICdzdWJqZWN0JywgJ1N1YmplY3QnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ01lc3NhZ2UnLCAndGV4dCcsICdtZXNzYWdlJywgJy4uLicpKTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgdGV4dGFyZWEubmFtZSA9ICdtZXNzYWdlJztcbiAgICAgICAgICAgIHRleHRhcmVhLmNvbHMgPSAnMzAnO1xuICAgICAgICAgICAgdGV4dGFyZWEucm93cyA9ICcxMCc7XG4gICAgICAgICAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcuLi4nO1xuICAgICAgICAgICAgdGV4dGFyZWEuaWQgPSAnbWVzc2FnZSc7XG4gICAgICAgICAgICB0ZXh0YXJlYS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjbWVzc2FnZScpO1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgodGV4dGFyZWEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Ym1pdCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgc3VibWl0QnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1zaGFyZS1mcm9tLXNxdWFyZScpO1xuICAgIHN1Ym1pdEJ0bi5hcHBlbmRDaGlsZChzdWJtaXRCdG5JY29uKTtcbiAgICBzdWJtaXRCdG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1N1Ym1pdCcpKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2U7XG4iLCJpbXBvcnQgQnVyZ2VyU2hha2VGcmllc0ltZyBmcm9tICcuL2Fzc2V0cy9idXJnZXItc2hha2UtZnJpZXMucG5nJztcblxuY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluLWhvbWUnO1xuXG4gICAgY29uc3QgaW50cm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGludHJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWludHJvLXNlY3Rpb24nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGludHJvU2VjdGlvbik7XG5cbiAgICBjb25zdCBpbnRyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBpbnRyb1RpdGxlLnRleHRDb250ZW50ID0gJ0hpZ2gtT2N0YW5lIEJ1cmdlcnMsIFNoYWtlcyAmIEZyaWVzJztcbiAgICBpbnRyb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ludHJvLXRpdGxlJyk7XG4gICAgaW50cm9TZWN0aW9uLmFwcGVuZENoaWxkKGludHJvVGl0bGUpO1xuXG4gICAgY29uc3QgaW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGludHJvVGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgXG4gICAgICAgIGVsaXQuIFF1aWRlbSBiZWF0YWUgY3VscGEgaXBzYW0gcmVwcmVoZW5kZXJpdCBjdW0sIHNhZXBlIGRlbGVjdHVzIGxhYm9yZSBcbiAgICAgICAgc3VzY2lwaXQgbW9sZXN0aWFzIGlsbG8gZG9sb3JpYnVzIHF1YXNpIGVhIHF1aXMgZXNzZSBpdXN0byB1bGxhbSB1dCBzaW50IFxuICAgICAgICBvYmNhZWNhdGkgZGlnbmlzc2ltb3MgcXVpYSBvZmZpY2lpcyBlbmltIGFiIGFsaXF1aWQgZGViaXRpcyEgSGljIFxuICAgICAgICBzdXNjaXBpdCBhY2N1c2FudGl1bSBkaXN0aW5jdGlvIGluIGFsaXF1aWQgZGVzZXJ1bnQgbW9sZXN0aWFzIWA7XG4gICAgaW50cm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2ludHJvLXRleHQnKTtcbiAgICBpbnRyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpID8gJ1NpZ24gVXAnIDogJ09yZGVyIE5vdyc7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBidG4tJHtuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCctJyl9YCk7XG4gICAgICAgIGludHJvU2VjdGlvbi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdmYS1zb2xpZCcsXG4gICAgICAgICAgICBuYW1lID09PSAnT3JkZXIgTm93JyA/ICdmYS1idXJnZXInIDogJ2ZhLXJpZ2h0LXRvLWJyYWNrZXQnXG4gICAgICAgICk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGltZ1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaG9tZS1pbWctc2VjdGlvbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1nU2VjdGlvbik7XG5cbiAgICBjb25zdCBpbWdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbWctd3JhcHBlcicpO1xuICAgIGltZ1NlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nV3JhcHBlcik7XG5cbiAgICBjb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaG9tZUltZy5zcmMgPSBCdXJnZXJTaGFrZUZyaWVzSW1nO1xuICAgIGltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlO1xuIiwiaW1wb3J0IEJ1cmdlcnNTZWN0aW9uSW1nIGZyb20gJy4vYXNzZXRzL2J1cmdlcnMtc2VjdGlvbi5wbmcnO1xuaW1wb3J0IE1pbGtzaGFrZXNTZWN0aW9uSW1nIGZyb20gJy4vYXNzZXRzL21pbGtzaGFrZXMtc2VjdGlvbi5wbmcnO1xuaW1wb3J0IEZyaWVzU2VjdGlvbkltZyBmcm9tICcuL2Fzc2V0cy9mcmllcy1zZWN0aW9uLnBuZyc7XG5pbXBvcnQgSGFtYnVyZ2VySW1nIGZyb20gJy4vYXNzZXRzL2hhbWJ1cmdlci5wbmcnO1xuaW1wb3J0IENoZWVzZWJ1cmdlckltZyBmcm9tICcuL2Fzc2V0cy9jaGVlc2VidXJnZXIucG5nJztcbmltcG9ydCBCYWNvbkJ1cmdlckltZyBmcm9tICcuL2Fzc2V0cy9iYWNvbi1idXJnZXIucG5nJztcbmltcG9ydCBEb3VibGVDaGVlc2VidXJnZXJJbWcgZnJvbSAnLi9hc3NldHMvZG91YmxlLWNoZWVzZWJ1cmdlci5wbmcnO1xuaW1wb3J0IFZhbmlsbGFTaGFrZUltZyBmcm9tICcuL2Fzc2V0cy92YW5pbGxhLW1pbGtzaGFrZS5wbmcnO1xuaW1wb3J0IENob2NvbGF0ZVNoYWtlSW1nIGZyb20gJy4vYXNzZXRzL2Nob2NvbGF0ZS1taWxrc2hha2UucG5nJztcbmltcG9ydCBTdHJhd2JlcnJ5U2hha2VJbWcgZnJvbSAnLi9hc3NldHMvc3RyYXdiZXJyeS1taWxrc2hha2UucG5nJztcbmltcG9ydCBGcmVuY2hGcmllc0ltZyBmcm9tICcuL2Fzc2V0cy9mcmVuY2gtZnJpZXMucG5nJztcbmltcG9ydCBDdXJseUZyaWVzSW1nIGZyb20gJy4vYXNzZXRzL2N1cmx5LWZyaWVzLnBuZyc7XG5cbmNvbnN0IE1lbnVJdGVtID0gKGltZywgbmFtZSwgcHJpY2UsIGNhbG9yaWVzLCBjYXJicywgZmF0LCBzb2RpdW0pID0+IHtcbiAgICBjb25zdCBudXRyaXRpb24gPSB7XG4gICAgICAgIGNhbG9yaWVzLFxuICAgICAgICBjYXJicyxcbiAgICAgICAgZmF0LFxuICAgICAgICBzb2RpdW1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaW1nLCBuYW1lLCBwcmljZSwgbnV0cml0aW9uIH07XG59O1xuXG5jb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgICAgaW1nOiBCdXJnZXJzU2VjdGlvbkltZyxcbiAgICAgICAgdGl0bGU6ICdCdXJnZXJzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgIEhhbWJ1cmdlckltZyxcbiAgICAgICAgICAgICAgICAnSGFtYnVyZ2VyJyxcbiAgICAgICAgICAgICAgICAnJDYuOTknLFxuICAgICAgICAgICAgICAgICc5MDAnLFxuICAgICAgICAgICAgICAgICc1NCcsXG4gICAgICAgICAgICAgICAgJzU4JyxcbiAgICAgICAgICAgICAgICAnNDQwJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgIENoZWVzZWJ1cmdlckltZyxcbiAgICAgICAgICAgICAgICAnQ2hlZXNlYnVyZ2VyJyxcbiAgICAgICAgICAgICAgICAnJDcuNDknLFxuICAgICAgICAgICAgICAgICc5NTAnLFxuICAgICAgICAgICAgICAgICc1NicsXG4gICAgICAgICAgICAgICAgJzY1JyxcbiAgICAgICAgICAgICAgICAnNzgwJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgIEJhY29uQnVyZ2VySW1nLFxuICAgICAgICAgICAgICAgICdCYWNvbiBCdXJnZXInLFxuICAgICAgICAgICAgICAgICckNy44NScsXG4gICAgICAgICAgICAgICAgJzkzMCcsXG4gICAgICAgICAgICAgICAgJzU1JyxcbiAgICAgICAgICAgICAgICAnNjInLFxuICAgICAgICAgICAgICAgICc1OTAnXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgRG91YmxlQ2hlZXNlYnVyZ2VySW1nLFxuICAgICAgICAgICAgICAgICdEb3VibGUgQ2hlZXNlYnVyZ2VyJyxcbiAgICAgICAgICAgICAgICAnJDkuNDknLFxuICAgICAgICAgICAgICAgICcxLjFLJyxcbiAgICAgICAgICAgICAgICAnNTYnLFxuICAgICAgICAgICAgICAgICc3OCcsXG4gICAgICAgICAgICAgICAgJzk5MCdcbiAgICAgICAgICAgIClcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IE1pbGtzaGFrZXNTZWN0aW9uSW1nLFxuICAgICAgICB0aXRsZTogJ01pbGtzaGFrZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgVmFuaWxsYVNoYWtlSW1nLFxuICAgICAgICAgICAgICAgICdWYW5pbGxhIE1pbGtzaGFrZScsXG4gICAgICAgICAgICAgICAgJyQ1LjQ5JyxcbiAgICAgICAgICAgICAgICAnNTAnLFxuICAgICAgICAgICAgICAgICcxMCcsXG4gICAgICAgICAgICAgICAgJzUnLFxuICAgICAgICAgICAgICAgICcxMidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBNZW51SXRlbShcbiAgICAgICAgICAgICAgICBDaG9jb2xhdGVTaGFrZUltZyxcbiAgICAgICAgICAgICAgICAnQ2hvY29sYXRlIE1pbGtzaGFrZScsXG4gICAgICAgICAgICAgICAgJyQ1LjQ5JyxcbiAgICAgICAgICAgICAgICAnNTAnLFxuICAgICAgICAgICAgICAgICcxMCcsXG4gICAgICAgICAgICAgICAgJzUnLFxuICAgICAgICAgICAgICAgICcxMidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBNZW51SXRlbShcbiAgICAgICAgICAgICAgICBTdHJhd2JlcnJ5U2hha2VJbWcsXG4gICAgICAgICAgICAgICAgJ1N0cmF3YmVycnkgTWlsa3NoYWtlJyxcbiAgICAgICAgICAgICAgICAnJDUuNDknLFxuICAgICAgICAgICAgICAgICc1MCcsXG4gICAgICAgICAgICAgICAgJzEwJyxcbiAgICAgICAgICAgICAgICAnNScsXG4gICAgICAgICAgICAgICAgJzEyJ1xuICAgICAgICAgICAgKVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogRnJpZXNTZWN0aW9uSW1nLFxuICAgICAgICB0aXRsZTogJ0ZyaWVzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgIEZyZW5jaEZyaWVzSW1nLFxuICAgICAgICAgICAgICAgICdGcmVuY2ggRnJpZXMnLFxuICAgICAgICAgICAgICAgICckMi41OSAtICQ1LjU5JyxcbiAgICAgICAgICAgICAgICAnNTIwIC0gMS40SycsXG4gICAgICAgICAgICAgICAgJzEzNScsXG4gICAgICAgICAgICAgICAgJzQ3JyxcbiAgICAgICAgICAgICAgICAnOTcwJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgIEN1cmx5RnJpZXNJbWcsXG4gICAgICAgICAgICAgICAgJ0N1cmx5IEZyaWVzJyxcbiAgICAgICAgICAgICAgICAnJDIuNTkgLSAkNS41OScsXG4gICAgICAgICAgICAgICAgJzUyMCAtIDEuNEsnLFxuICAgICAgICAgICAgICAgICcxMzUnLFxuICAgICAgICAgICAgICAgICc0NycsXG4gICAgICAgICAgICAgICAgJzk3MCdcbiAgICAgICAgICAgIClcbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbi1tZW51JztcblxuICAgIG1lbnUuZm9yRWFjaCgobWVudVNlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ21lbnUtc2VjdGlvbicsXG4gICAgICAgICAgICBgbWVudS1zZWN0aW9uLSR7bWVudVNlY3Rpb24udGl0bGUudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24taGVhZGVyJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IG1lbnVTZWN0aW9uLmltZztcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG1lbnVTZWN0aW9uLnRpdGxlO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbi1pdGVtcycpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1zKTtcblxuICAgICAgICBtZW51U2VjdGlvbi5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQtaGVhZCcpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZC10aXRsZScpO1xuICAgICAgICAgICAgY2FyZEhlYWQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2FyZEltZy5zcmMgPSBpdGVtLmltZztcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjYXJkSW1nKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZC1uYW1lJyk7XG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjYXJkUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgY2FyZFByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZC1wcmljZScpO1xuICAgICAgICAgICAgY2FyZEhlYWQuYXBwZW5kQ2hpbGQoY2FyZFByaWNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIFxuICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gQWxpcXVhbSBudWxsYSByYXRpb25lIHNpbWlsaXF1ZSB0ZW5ldHVyIGF0IFxuICAgICAgICAgICAgbmVjZXNzaXRhdGlidXMsIG5hdHVzLCBkb2xvcmlidXMgdm9sdXB0YXMgZXhwZWRpdGEgZHVjaW11cyBcbiAgICAgICAgICAgIGNvbnNlcXV1bnR1ciByZXByZWhlbmRlcml0IGVycm9yLmA7XG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmROdXRyaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmROdXRyaXRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLW51dHJpdGlvbicpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkTnV0cml0aW9uKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaXRlbS5udXRyaXRpb24pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51dHJpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmROdXRyaXRpb24uYXBwZW5kQ2hpbGQobnV0cml0aW9uKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gaXRlbS5udXRyaXRpb25ba2V5XTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdudXRyaXRpb24tdmFsdWUnKTtcbiAgICAgICAgICAgICAgICBudXRyaXRpb24uYXBwZW5kQ2hpbGQodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbnV0cml0aW9uLWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgbnV0cml0aW9uLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdjYWxvcmllcycpIGxhYmVsLnRleHRDb250ZW50ID0gJ0NhbG9yaWVzJztcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnY2FyYnMnKSBsYWJlbC50ZXh0Q29udGVudCA9ICdDYXJicyAoZyknO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdmYXQnKSBsYWJlbC50ZXh0Q29udGVudCA9ICdUb3RhbCBGYXQgKGcpJztcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc29kaXVtJykgbGFiZWwudGV4dENvbnRlbnQgPSAnU29kaXVtIChtZyknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTtcbiIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBMb2dvSW1nIGZyb20gJy4vYXNzZXRzL2xvZ28ucG5nJztcblxuY29uc3QgY3JlYXRlTG9nb05hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9nb05hbWUudGV4dENvbnRlbnQgPSAnVHVyYm8gU2hhY2snO1xuICAgIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoJ2xvZ28tbmFtZScpO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJy4nO1xuICAgIGxvZ29OYW1lLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgcmV0dXJuIGxvZ29OYW1lO1xufTtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwYWdlcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QgVXMnXTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nb0ltZy5zcmMgPSBMb2dvSW1nO1xuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgICBsb2dvLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ29OYW1lKCkpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICAgICAgaWYgKHBhZ2UgPT09IGN1cnJlbnRQYWdlKSBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhZ2UpKTtcblxuICAgICAgICBpZiAocGFnZSA9PT0gJ0hvbWUnKSBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWhvdXNlJyk7XG4gICAgICAgIGlmIChwYWdlID09PSAnTWVudScpIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtYnVyZ2VyJyk7XG4gICAgICAgIGlmIChwYWdlID09PSAnQ29udGFjdCBVcycpIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtcGhvbmUnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBzb2NpYWxNZWRpYVBhZ2VzID0gWydpbnN0YWdyYW0nLCAnZmFjZWJvb2snLCAndHdpdHRlciddO1xuXG4gICAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvY2lhbHMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXNvY2lhbHMnKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFscyk7XG4gICAgc29jaWFscy5hcHBlbmRDaGlsZChjcmVhdGVMb2dvTmFtZSgpKTtcblxuICAgIHNvY2lhbE1lZGlhUGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLmhyZWYgPSBgaHR0cHM6Ly93d3cuJHtwYWdlfS5jb20vdGhlb2RpbnByb2plY3RgO1xuICAgICAgICBzb2NpYWxzLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJywgYGZhLSR7cGFnZX1gKTtcbiAgICAgICAgbGluay5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pbmZvJyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcHJvamVjdExpbmsuaHJlZiA9XG4gICAgICAgICdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vbGVzc29ucy9ub2RlLXBhdGgtamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UnO1xuICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gJ8KpIDIwMjMgVGhlIE9kaW4gUHJvamVjdCc7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vaWthejEvcmVzdGF1cmFudC1wYWdlJztcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ2J5IGlrYXoxJztcbiAgICBpbmZvLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycsICdmYS1naXRodWInKTtcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jcmVkaXQnKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF1dGhvciA9IGkgPyAnRnJlZXBpaycgOiAnU21hc2hpY29ucyc7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay5ocmVmID0gYGh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2Zhc3QtZm9vZGA7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgRmFzdCBmb29kIGljb25zIGJ5ICR7YXV0aG9yfSAtIEZsYXRpY29uYDtcbiAgICAgICAgY3JlZGl0LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cblxuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKHBhZ2UgPSAnSG9tZScpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtwYWdlfSB8IFR1cmJvIFNoYWNrYDtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcihwYWdlKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIG1haW4ucmVwbGFjZVdpdGgoY3JlYXRlTWVudVBhZ2UoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ29udGFjdCBVcyc6XG4gICAgICAgICAgICBtYWluLnJlcGxhY2VXaXRoKGNyZWF0ZUNvbnRhY3RQYWdlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtYWluLnJlcGxhY2VXaXRoKGNyZWF0ZUhvbWVQYWdlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBsaTpmaXJzdC1jaGlsZCAubmF2LWJ0bicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgbGk6bnRoLWNoaWxkKDIpIC5uYXYtYnRuJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBsaTpsYXN0LWNoaWxkIC5uYXYtYnRuJyk7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlUGFnZSgnSG9tZScpKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlUGFnZSgnTWVudScpKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlUGFnZSgnQ29udGFjdCBVcycpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xuXG5jcmVhdGVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=