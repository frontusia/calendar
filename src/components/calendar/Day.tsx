import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from '../../assets/stylesheets/common.css?module';

interface Props {
  day: Number
}

@Component
export default class Day extends VueComponent<Props> {

    @Prop()
    private day!: Number;

    isToday () {
        return this.$store.getters.getCurrentDay === this.day;
    }

    get isFinishedTasks() {
        const tasks = this.$store.getters.getTasks(this.day);
        if (!tasks.length) return false;

        const notFinishedTasks = tasks.filter((value: any) => !value.checked);
        return !notFinishedTasks.length;
    }

    get isWithTasks () {
        return this.$store.getters.getTaskCount(this.day) > 0;
    }

    handleClick() {
        this.$store.commit('SET_CURRENT_DAY', this.day);
    }

    render() {

        return (
            <span
                onClick={() => this.handleClick()}
                class={[
                    styles.day,
                    this.isToday() ? styles.today : '',
                    this.isWithTasks ? styles.tasks : '',
                    this.isFinishedTasks ? styles.finished: ''
                ]}
            >
                {this.day}
            </span>
        )
    }
}
