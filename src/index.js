// ✅ REACT 18 ENTRY FILE (index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// ✅ INTERACTIVE SCRIPTS BELOW (NOT RECOMMENDED IN PURE REACT ENV)
document.addEventListener('DOMContentLoaded', () => {
    // ============ SKILLS TABS ============
    const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContent.forEach(c => c.classList.remove('skills__active'));
            tabs.forEach(t => t.classList.remove('skills__active'));

            target.classList.add('skills__active');
            tab.classList.add('skills__active');
        });
    });

    // ============ PORTFOLIO POPUP ============
    // document.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("portfolio__button")) {
    //         togglePortfolioPopup();
    //         portfolioItemDetails(e.target.parentElement);
    //     }
    // });

    // function togglePortfolioPopup() {
    //     document.querySelector(".portfolio__popup").classList.toggle("open");
    // }

    // const closeBtn = document.querySelector(".portfolio__popup-close");
    // if (closeBtn) closeBtn.addEventListener("click", togglePortfolioPopup);

    // function portfolioItemDetails(item) {
    //     document.querySelector(".pp__thumbnail img").src = item.querySelector(".portfolio__item-image img").src;
    //     document.querySelector(".details__title").innerHTML = item.querySelector(".portfolio__item-title").innerHTML;
    //     document.querySelector(".portfolio__popup-body").innerHTML = item.querySelector(".portfolio__item-details").innerHTML;
    //     document.querySelector(".caption__content").innerHTML = item.querySelector(".portfolio__content-caption").innerHTML;
    // }

    // ============ PORTFOLIO ACTIVE TABS ============
    const linkWork = document.querySelectorAll('.portfolio__tab');

    function activeWork() {
        linkWork.forEach(l => l.classList.remove('active__portfolio'));
        this.classList.add('active__portfolio');
    }

    linkWork.forEach(l => l.addEventListener('click', activeWork));

    // ============ SERVICES POPUP ============
    const modalViews = document.querySelectorAll(".services__modal"),
        modalBtns = document.querySelectorAll(".services__button"),
        modalCloses = document.querySelectorAll(".services__modal-close");

    modalBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            modalViews[i].classList.add("active-modal");
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener("click", () => {
            modalViews.forEach(view => view.classList.remove("active-modal"));
        });
    });

    // ============ INPUT ANIMATION ============
    const inputs = document.querySelectorAll(".input");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.parentNode.classList.add("focus");
        });

        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.parentNode.classList.remove("focus");
            }
        });
    });

    // ============ SCROLL SECTION ACTIVE ============
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector('.nav a[href*=' + sectionId + ']');

            if (!navLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    });
});
