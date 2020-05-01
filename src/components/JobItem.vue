<template>
    <article class="main__job" v-bind:class="{ expanded: isExpanded }">
        <header class="main__job-hdr">
            <h3 class="main__job-title">
                <a v-if="job.post_url" :href="job.post_url" target="_blank">{{ job.title }}</a>
                <span v-else>{{ job.title }}</span>
            </h3>
            <span class="main__job-status">{{ job.status }}</span>
            <button class="main__job-details-link" @click="toggleDetails">
                {{ isExpanded ? '-' : '+' }}
            </button>
            <div class="main__job-company">
                <a v-if="job.company.url" :href="job.company.url" target="_blank">{{ job.company.name }}</a>
                <span v-else>{{ job.company.name }}</span>
            </div>
        </header>

        <div class="main__job-body">
            <main class="main__job-info">
                <span class="main__job-contract">Contract type: <strong>{{ job.contract_type }}</strong></span>
                <span class="main__job-contact">Contact: <strong>{{ job.contact ? job.contact.address : '' }}</strong></span>
                <div v-if="job.notes" class="main__job-notes">
                    <strong>Notes:</strong>
                    <p>{{ job.notes }}</p>
                </div>
            </main>
            <footer class="main__job-ftr">
                <p v-if="job.date_applied || job.applied_through">
                    Applied 
                    <span v-if="job.date_applied">on <strong>{{ job.date_applied }}</strong></span> 
                    <span v-if="job.applied_through"> through <strong>{{ job.applied_through }}</strong></span>
                </p>
                <div class="main__job-buttons clearfix-after">
                    <router-link 
                        :to="{ name: 'edit-job', params: { id: job.id }, query: { ...queryValues } }"
                        class="main__job-edit">
                        Edit
                    </router-link>
                    <button class="main__job-delete" @click.prevent="handleClickDelete">Delete</button>
                </div>
            </footer>
        </div>
    </article>
</template>

<script>
export default {
    name: 'JobItem',
    props: {
        job: Object
    },
    data: function() {
        return {
            isExpanded: false,
        };
    },
    computed: {
        queryValues: function() {
            return {
                title: this.job.title,
                url: this.job.post_url,
                status: this.job.status,
                companyName: this.job.company.name,
                companyUrl: this.job.company.url,
                contract: this.job.contract ? this.job.contract.type : '',
                contact: this.job.contact ? this.job.contact.address : '',
                notes: this.job.notes,
                appliedOn: this.job.date_applied,
                appliedThrough: this.job.applied_through
            };
        }
    },
    methods: {
        toggleDetails() {
            this.isExpanded = !this.isExpanded;
        },
        handleClickDelete() {
            // this.deleteJob(this.job.id);
            this.$emit('delete-job', this.job.id);
        }
    }
}
</script>