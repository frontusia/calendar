import { Component } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import moment from 'moment';

import Month from '@/components/calendar/Month';
import TheHeader from '@/components/base/TheHeader';

@Component
export default class Calendar extends VueComponent {
    getMonth() {
        interface Months {
            [key: number]: String;
        }

        const months:Months = {
            1: 'Январь',
            2: 'Февраль',
            3: 'Март',
            4: 'Апрель',
            5: 'Май',
            6: 'Июнь',
            7: 'Июль',
            8: 'Август',
            9: 'Сентябрь',
            10: 'Октябрь',
            11: 'Ноябрь',
            12: 'Декабрь',
        }
        return months[parseInt(moment().format('M'))];
    }

    getYear() {
        return moment().format('YYYY');
    }

    getHeader() {
        return this.getMonth() + ' ' + this.getYear();
    }

    render() {
        return (
            <div>
                <TheHeader header={this.getHeader()} />

                <Month/>
            </div>
        )
    }
}
