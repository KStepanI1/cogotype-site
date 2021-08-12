"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(index = 0) {
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.add('hide');
        tabs[index].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const eTarget = e.target;

        if (eTarget && eTarget.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item === eTarget) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Timer

    const deadline = '2021-12-15';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - new Date;
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = ("0" + t.days).slice(-2);
            hours.innerHTML = ("0" + t.hours).slice(-2);
            minutes.innerHTML = ("0" + t.minutes).slice(-2);
            seconds.innerHTML = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modal = document.querySelector('.modal');
    const modalBtns = document.querySelectorAll('[data-modal]');
    const modalClose = modal.querySelector('.modal__close');


    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    modalBtns.forEach(btn => {
        btn.addEventListener('click', showModal);
    })

    modalClose.addEventListener('click', hideModal);


})