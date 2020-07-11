import { Component, Vue } from 'vue-property-decorator';

import Calendar from './components/calendar/Calendar';
import Tasks from './components/tasks/Tasks';
import GithubLink from './components/community/GithubLink';

import styles from './assets/stylesheets/common.css?module';

@Component
export default class App extends Vue {
  render() {

    return (
        <div class={styles.main_container}>
            <div id={'Calendar'} class={styles.flex_container}>
                <div class={styles.block}>
                    <Calendar/>
                </div>

                <div class={styles.block}>
                    <Tasks/>
                </div>
            </div>

            <div id={'Footer'}>
                <GithubLink />
            </div>
        </div>
    )
  }
}
