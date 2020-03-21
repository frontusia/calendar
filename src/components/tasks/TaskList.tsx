import {Component, Prop, Vue, Model} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import styles from '../../assets/stylesheets/common.css?module';

@Component
export default class TaskList extends VueComponent {

    get tasks() {
        return this.$store.getters.getTasks(this.currentDay);
    }

    get currentDay() {
        return this.$store.getters.getCurrentDay;
    }

    handleClick(index: number, checked: boolean) {
        const data = {
            day: this.currentDay,
            index,
            checked: !checked,
        };

        this.$store.commit('TASK_CHECKED', data);
    }

    render() {
        const list = this.tasks.map((value: any) => {
            const {name, checked, index}:any = value;

            const id = `${index}_${name}`;

            return <div>
                <input type="checkbox"
                       id={id} name={id}
                       checked={checked}
                       onClick={() => this.handleClick(index, checked)}
                />
                <label for={id}>
                    {name}
                </label>
            </div>
        })

        return (
            <div id="check_list" class={styles.task_list_block}>
                {list}
            </div>
        )
    }
}
