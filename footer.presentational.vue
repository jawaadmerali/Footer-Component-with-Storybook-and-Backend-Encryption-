<template>
  <footer>
    <section class="inline bg-default large" v-if="!rentals">
      <div class="flex center text-center f4" :class="theme !== 'small' ? 'vertical-xs' : 'vertical'">
        <div><b>{{ labels.metAgent }}</b></div>
        <div>
          <a :href="'tel:' + getPhoneNumber" class="link">
            <i class="icon-phone"></i>
            <span>{{ formattedPhoneNumber }}</span>
          </a>
        </div>
      </div>
    </section>
    <section class="inline large bg-brand" v-if="componentMounted">
      <div class="grid large" :class="theme !== 'small' ? 'fixed grid-xs-2 grid-sm-3 grid-md-6' : 'grid-xs-2'">
        <ul class="flex vertical top left lh-normal " v-for="item in footlinks">
          <li v-for="link in item" class="singleline">
            <a :href="link.href || 'javascript:;' " @[link.action]="link.trigger(link)" :rel="link.rel" :title="link.text">
              <img class="object-contain" v-if="link.img" :alt="link.text" height="12px" width="30px;" v-lazyload :data-src="link.img" />
              {{link.text}}
            </a>
          </li>
        </ul>
      </div>
    </section>
    <mvtFooterLinks :theme="theme" />
    <!-- TODO: dpp disclaimer -->
    <mvtCompliance v-if="!hideCompliance" />
  </footer>
</template>

<script>
  import mvtFooterLinks from '@/common/components/mvtfooterlinks/mvt-footerlinks.vue';
  import mvtCompliance from '@/common/components/mvtcompliance/mvt-compliance.vue';

  export default {
    name: 'FooterPresentational',
    props: {
      rentals: Boolean,
      theme: String,
      formattedPhoneNumber: String,
      hideCompliance: Boolean,
      labels: Object,
      getPhoneNumber: String,
      footlinks: Object,
      componentMounted: Boolean,
      description: String,
      disabilities: String,
      partners: String,
    },
    components: {
      mvtFooterLinks,
      mvtCompliance,
    },
};
</script>
