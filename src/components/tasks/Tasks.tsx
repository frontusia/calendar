import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import TaskList from '@/components/tasks/TaskList';
import TheHeader from '@/components/base/TheHeader';

import styles from '../../assets/stylesheets/common.css?module';
import moment from "moment";

@Component
export default class Tasks extends VueComponent {
    value = '';

    onEnter(value: String) {
        if (value.length > 0) {
            this.addToList(value);
            this.scrollToEnd();
            this.value = '';
        }
    }

    get currentDay() {
        return this.$store.getters.getCurrentDay;
    }

    get currentMonth() {
        interface Months {
            [key: number]: String;
        }

        const months:Months = {
            1: 'января',
            2: 'февраля',
            3: 'марта',
            4: 'апреля',
            5: 'мая',
            6: 'июня',
            7: 'июля',
            8: 'августа',
            9: 'сентября',
            10: 'октября',
            11: 'ноября',
            12: 'декабря',
        };

        return months[parseInt(moment().format('M'))];
    }

    addToList(value: String) {
        this.$store.commit('ADD_TASK', {day: this.currentDay, task: value});
    }

    scrollToEnd() {
      const container = this.$el.querySelector(`#check_list`);
      if (container) {
          container.scrollTop = container.scrollHeight
      }
    }

    render() {

        return (
            <div class={styles.task_list}>
                <TheHeader header={'События'}
                           subtitle={`на ${this.currentDay} ${this.currentMonth}`}/>

                <input v-model={this.value}
                       onkeypress={(event: any) => {
                           if (event.key === "Enter") {
                               this.onEnter(this.value);
                           }
                       }}
                       placeholder='Текст задачи'
                       class={styles.input_task}
                />

                <TaskList />

            </div>
        )
    }
}
