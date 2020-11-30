<template>
<div>
        <Header />
        <slot/>
</div>
</template>

<script>
 import Header from '@/components/common/Header.vue'
    export default {
        name: "LayoutDefault",
        components: {
            Header,
        }
    }
    </script>