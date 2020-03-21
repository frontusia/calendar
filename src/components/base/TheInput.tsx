import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';


@Component
export default class TheInput extends VueComponent {
    value = '';

    onInput(evt: Object) {
        this.$emit('input', evt.target.value);
    }

    onEnter() {
        this.$emit('enter', this.value);
        this.value = '';
    }

    render() {

        return (
            <input v-model={this.value}
                   onInput={this.onInput}
                   onKeypress={(event: any) => {
                           if (event.key === "Enter") {
                               this.onEnter();
                           }
                       }}
                   placeholder='Текст задачи'
            />
        )
    }
}
