import {mapGetters} from 'vuex';
import mapper from '@/common/store/mapper/index.js';
import enJSON from '@/common/utilities/lang/en/footer.js';
import esJSON from '@/common/utilities/lang/es/footer.js';
import FooterPresentational from './footer.presentational.vue';

export default {
    name: 'mvtFooter',
    root: true,
    inject: ['$eventBus'],
    props: ['geoInfo', 'theme', 'hideCompliance'],
    data() {
        return {
            componentMounted: false,
        };
    },
    computed: {
        ...mapGetters('glb', ['glb', 'getPhoneNumber']),
        geo(){
            return this.geoInfo || this.glb.geo || {};
        },
        footlinks() {
            return mapper.footerlinks({
                geo: this.geo,
                glb: this.glb,
                molang: this.molang.bind(this)
            }, {
                showLogin: this.showLogin.bind(this),
                showSignup: this.showSignup.bind(this),
                openContact: this.openContact.bind(this)
            });
        }
    },
    components: {
        FooterPresentational
    },
    methods: {
        showLogin: function(link) {
            var url = link && link.url;
            this.$eventBus.$emit('dialog-center', {name: 'mvtAuthenticate', opt: {type: 'mvtLogin', redirectUrl: url}, trigger: this.$options.name});
        },
        showSignup: function() {
            this.$eventBus.$emit('dialog-center', {name: 'mvtAuthenticate', opt: {type: 'mvtLogin'}, trigger: this.$options.name});
        },
        openContact: function() {
            this.$eventBus.$emit('dialog-open-contactus');
        }
    },
    beforeCreate() {
        this.injectMolangDataStore({type: 'footer', en: enJSON, es: esJSON});
    },
    mounted() {
        this.componentMounted = true;
    },
};
