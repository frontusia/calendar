import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

function updateLocalStorage(month: Number, calendar:any) {
    const json = JSON.stringify(calendar);
    localStorage.setItem(`calendar_${month}`, json)
}

function getPlans(month: Number, day: any) {
    const data = localStorage.getItem(`calendar_${month}`);
    const calendar = data ? JSON.parse(data) : null;
    return calendar ? calendar[day] : [];
}
const activeMonth = parseInt(moment().format('M'));

export default new Vuex.Store({
    state: {
        activeDay: parseInt(moment().format('D')),
        calendar: {},
    },
    getters: {
        getCurrentDay (state: any) {
            return state.activeDay;
        },
        getTasks(state: any) {
            return (day: any) => {
                return state.calendar[day];
            }
        },
        getTaskCount(state: any) {
            return (day: any) => {
                return state.calendar[day].length;
            }
        }
    },
    mutations: {
        CREATE_CALENDAR(state: any, data) {
            state.calendar = data;
        },
        SET_CURRENT_DAY(state: any, day) {
            state.activeDay = day;
        },
        ADD_TASK(state: any, {day, task}) {
            const length = state.calendar[day].length;

            const data = {
                checked: false,
                name: task,
                index: length,
            }

            state.calendar[day].push(data);
            updateLocalStorage(activeMonth, state.calendar);
        },
        TASK_CHECKED(state: any, {day, index, checked}) {
            state.calendar[day] = state.calendar[day].map((value: any) => {
                let newValue = value;

                if (index === value.index) {
                    newValue.checked = checked;
                }

                return newValue;
            });

            updateLocalStorage(activeMonth, state.calendar);
        },
    },
    actions: {
        createCalendar({commit}, {days}) {
            interface Calendar {
                [key: number]: any;
            }

            let obj: Calendar = {};

            for (let i = 1; i <= days; i++) {
                obj[i] = getPlans(activeMonth, i);
            }

            commit('CREATE_CALENDAR', obj);
        }
    }
})
