<template>
    <section class="main">
        <h1 class="main__title">
            <span>My Job Applications</span>
            <router-link to="/add-job" class="main__new-job-btn">+ Add</router-link>
        </h1>

        <jobs-list />
    </section>
</template>

<script>
import JobsList from '../components/JobsList';

export default {
    name: 'JobsView',
    components: {
        'jobs-list': JobsList,
    },
}
</script>