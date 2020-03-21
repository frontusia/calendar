import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import styles from '../../assets/stylesheets/common.css?module';

interface Props {
    header: string
}

@Component
export default class TheHeader extends VueComponent<Props> {

    @Prop()
    private header!: string;

    render() {

        return (
            <div class={styles.header}>{this.header}</div>
        )
    }
}
