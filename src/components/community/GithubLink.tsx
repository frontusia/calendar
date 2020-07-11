import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../../shims-vue';

import styles from '../../assets/stylesheets/link.css?module';

@Component
export default class GithubLink extends VueComponent {

    render() {

        return (
            <div>
                <a class={styles.github_link}
                   href='https://github.com/frontusia/calendar'
                   target='_blank'
                >
                    <img src={require('../../assets/img/github.png')}/>
                </a>
            </div>
        )
    }
}
