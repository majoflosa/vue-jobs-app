<template>
    <section class="main">
        <h1 class="main__title">
            <span>My Job Applications</span>
            <button class="main__new-job-btn">+ Add</button>

        </h1>

        <div v-if="loadingError"><h1>{{ loadingError }}</h1></div>

        <div v-if="loaded" class="main__jobs-list">
            <job-item v-for="job in jobs" :job="job" :key="job.id" />
        </div>
        <div v-else><h1>Loading your applications...</h1></div>
    </section>
</template>

<script>
import JobItem from '../components/JobItem';
import axios from 'axios';

export default {
    name: 'JobsList',
    components: { 
        'job-item': JobItem
    },
    data: function() {
        return { 
            jobs: [],
            loaded: false,
            loadingError: null,
        };
    },
    created: function() {
        axios.get('http://localhost:8888/api/jobs')
            .then(({ data }) => {
                this.jobs = data;
                this.loaded = true;
            })
            .catch(err => {
                console.log(err);
                this.loaded = true;
                this.loadingError = 'Application list could not be loaded.'
            });
    }
}
</script>
