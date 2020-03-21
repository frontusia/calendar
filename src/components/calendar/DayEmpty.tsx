import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import moment from 'moment';

import styles from '../../assets/stylesheets/common.css?module';

@Component
export default class Month extends VueComponent {

    render() {

        return (
            <span
                class={[styles.day_empty,]}
            ></span>

        )
    }
}
