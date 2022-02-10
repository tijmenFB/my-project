import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280
        },
        scrollBarWidth: 24
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#2e8be8',
                // primary: '#DE163D',
                secondary: '#424242',
                accent: '#1de9b6',
                error: '#EF5350',
                info: '#2196F3',
                success: '#66BB6A',
                warning: '#FFC107'
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
});