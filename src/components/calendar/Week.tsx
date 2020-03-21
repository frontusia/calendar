import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import Day from '@/components/calendar/Day';
import DayEmpty from '@/components/calendar/DayEmpty';

import styles from '../../assets/stylesheets/common.css?module';

interface Props {
  days: Array<number>
}

@Component
export default class Week extends VueComponent<Props> {

    @Prop()
    private days!: Array<number>;

    render() {
        const days = this.days.map((day: Number) => {
            if (day) return <Day day={day}/>
            return <DayEmpty />
        })

        return (
            <div class={styles.week}>
                {days}
            </div>
        )
    }
}
