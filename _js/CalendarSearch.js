class CalendarSearch {

    constructor() {
        this.initLayout();
    }

    initLayout() {
        this.calendarContent = document.querySelectorAll('.calendar-content');
        this.mainContentCalendarDate = document.querySelectorAll('.main-content__calendar-date');
        this.calendarContentEvent = document.querySelectorAll('.calendar-content__event');
        // this.calendarContentTitle = document.querySelector('.calendar-content__title');
        // this.calResult = this.calendarContent.textContent.includes('Библиотека №5');
        // for (let i = 0; i < this.calendarContent.length; i++) {
        //     if (this.calResult) {
        //         console.log(this.calResult);
        //     }
        // }

        this.calendarContent.forEach((el) => {
            this.calendarContentEvent.forEach(elem => {
                if (!el.textContent.includes('№5')) {
                    // for (let i = 0; i < this.mainContentCalendarDate.length; i++) {
                    //     console.log(this.mainContentCalendarDate[i]);
                    //     // this.mainContentCalendarDate[i].style.opacity = '0';
                    // }
                    // console.log(el.id);
                    elem.style.display = 'none';
                }
            });
        });
    }
}