import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import moment from 'moment';
import Week from '@/components/calendar/Week';
import WeekNames from '@/components/calendar/WeekNames';

@Component
export default class Month extends VueComponent {

    week = [
        {name: 'Пн', id: 1},
        {name: 'Вт', id: 2},
        {name: 'Ср', id: 3},
        {name: 'Чт', id: 4},
        {name: 'Пт', id: 5},
        {name: 'Сб', id: 6},
        {name: 'Вс', id: 7},
    ]

    getFirstDayWeek () {
        return parseInt(moment().set("date", 1).format('E'));
    }

    getCountDays () {
        return moment().daysInMonth();
    }

    getCurrentMonth () {
        return Number(moment().month());
    }

    genWeek (day: number, days: number) {
        return this.week.map(() => {
            return day <= days ? day++ : null;
        });
    }

    fillZero(first: number, days: number) {
        let day = 1;
        let firstWeek = this.week.map((value) => {
            if (value.id < first){
                return null;
            } else {
                return day++;
            }
        });

        let month = [firstWeek];

        for (let d = day; d <= days; d+=7) {
            month.push(this.genWeek(d, days));
        }

        return month;
    }

    getMonth() {
        const firstDay = this.getFirstDayWeek();
        const dayOfMonth = this.getCountDays();
        const currentMonth = this.getCurrentMonth();

        let month = this.fillZero(firstDay, dayOfMonth);

        this.$store.dispatch('createCalendar', {days: dayOfMonth, month: currentMonth});

        return month;
    }

    @Prop()
    private msg!: string;

    render() {
        const weeks = this.getMonth().map((week) => {
            return <Week days={week}/>
        })

        return (
            <div>
                <WeekNames />

                {weeks}
            </div>
        )
    }
}
