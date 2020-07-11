import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import styles from '../../assets/stylesheets/common.css?module';

interface Props {
    header: string,
    subtitle: string,
}

@Component
export default class TheHeader extends VueComponent<Props> {

    @Prop() private header!: string;
    @Prop() private subtitle!: string;

    render() {

        return (
            <div class={styles.header}>
                <span>{this.header}</span>
                <span class={styles.subtitle}>{this.subtitle}</span>
            </div>
        )
    }
}
