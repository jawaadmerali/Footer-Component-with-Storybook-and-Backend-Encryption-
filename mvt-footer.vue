<template>
    <FooterPresentational
        :rentals="glb.rentals"
        :formattedPhoneNumber="$filters.formatPhoneNumber(getPhoneNumber)"
        :theme="theme"
        :footlinks="footlinks"
        :hideCompliance="hideCompliance"
        :labels="{
            metAgent: molang('footer.meetAgentToday'),
        }"
        :getPhoneNumber="getPhoneNumber"
        :componentMounted="componentMounted"
    />
</template>

<script src="./mvt-footer.js"></script>
