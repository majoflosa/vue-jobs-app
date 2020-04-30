<template>
    <section class="main">
        <h1 class="main__title">
            <span>My Job Applications</span>
            <button class="main__new-job-btn">+ Add</button>
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