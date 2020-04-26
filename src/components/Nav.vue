<template>
    <header class="header">
        <div class="header__logo">JOB HUNT</div>

        <nav logo="header__nav">
            <router-link to="/" class="header__navlink">My Applications</router-link>
            <router-link to="/assets" class="header__navlink">My Assets</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav',
}
</script>