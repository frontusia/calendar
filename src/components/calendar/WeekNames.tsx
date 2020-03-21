import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from '../../assets/stylesheets/common.css?module';

@Component
export default class WeekNames extends VueComponent {


    render() {
        return (

            <div class={styles.week}>
                <div class={styles.week_names}>
                    Пн
                </div>
                <div class={styles.week_names}>
                    Вт
                </div>
                <div class={styles.week_names}>
                    Ср
                </div>
                <div class={styles.week_names}>
                    Чт
                </div>
                <div class={styles.week_names}>
                    Пт
                </div>
                <div class={styles.week_names}>
                    Сб
                </div>
                <div class={styles.week_names}>
                    Вс
                </div>
            </div>

        )
    }
}
