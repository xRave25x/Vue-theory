<template>
    <li>
        <img :src="require(`@/assets/img/${icon}`)" :alt="icon">
        <slot name="pretext"></slot>
        <span v-html="`<b>${text}</b>`"></span>

        <slot></slot>
    </li>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        },
        icon: {
            default: 'user.png'
        }
    }
}
</script>
