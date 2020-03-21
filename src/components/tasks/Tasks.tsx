import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import TheInput from '@/components/base/TheInput';
import TaskList from '@/components/tasks/TaskList';
import TheHeader from '@/components/base/TheHeader';

import styles from '../../assets/stylesheets/common.css?module';

@Component
export default class Tasks extends VueComponent {
    value = '';

    onEnter(value: String) {
        if (value.length > 0) {
            this.addToList(value);
            this.scrollToEnd();
        }
    }

    get currentDay() {
        return this.$store.getters.getCurrentDay;
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
                <TheHeader header={'События'} />

                <TheInput v-model={this.value}
                          onEnter={this.onEnter}
                          class={styles.input_task}
                />

                <TaskList />

            </div>
        )
    }
}
