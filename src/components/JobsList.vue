<template>
    <div v-if="loaded" class="main__jobs-list" key="jobs-list-load">
        <div v-if="loadingError" key="loading-error"><h1>{{ loadingError }}</h1></div>
        <job-item v-for="job in jobs" :job="job" :key="job.id" @delete-job="removeJob" />
    </div>
    <div v-else key="jobs-list-load"><h1>Loading your applications...</h1></div>
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
            loadingError: null,
            loaded: false
        };
    },
    methods: {
        addJob: function(job) {
            this.jobs.push(job);
        },
        removeJob: function(id) {
            this.jobs = this.jobs.filter(job => job.id !== id);
        },
        updateJob: function(updatedJob) {
            this.jobs = this.jobs.map(job => {
                if (job.id === updatedJob.id) {
                    return updatedJob;
                }

                return job;
            });
        },
    },
    created: function() {
        axios.get('http://localhost:8888/api/jobs')
            .then(({ data }) => {
                const sorted = data.slice().sort((a, b) => {
                    const aDate = new Date(a.date_applied);
                    const bDate = new Date(b.date_applied);

                    if (aDate > bDate) return -1;
                    if (bDate > aDate) return 1;
                    return 0;
                });
                this.jobs = sorted;
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
