<template>
    <section class="job-modal modal">
        <div class="job-modal__inner modal__inner">
            
            <header class="job-modal__header modal__header">
                <h1 class="job-modal__title modal__title">Edit Application Information</h1>
                <router-link to="/" class="job-modal__close modal__close">
                    <span>Close</span> <i class="fal fa-times"></i>
                </router-link>
            </header>

            <main class="job-modal__body modal__body">
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-title">Job Position (required)</label>
                    <input type="text" id="job-title" placeholder="Front End Developer" v-model="title">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-url">Job Posting URL</label>
                    <input type="text" id="job-url" placeholder="http://www.jobs.com/1234" v-model="url">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-company">Company (required)</label>
                    <input type="text" id="job-company" placeholder="Company name" v-model="companyName">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-company-url">Company Website</label>
                    <input type="text" id="job-company-url" placeholder="http://www.companyname.com/" v-model="companyUrl">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-contract">Contract Type</label>
                    <input type="text" id="job-contract" placeholder="Full-time, Part-time, Hourly, etc." v-model="contract">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-contact">Contact</label>
                    <input type="text" id="job-contact" placeholder="jobs@companysite.com" v-model="contact">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-notes">Notes</label>
                    <textarea type="text" id="job-notes" placeholder="About this job..." v-model="notes"></textarea>
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="applied-on">Applied on</label>
                    <input type="text" id="applied-on" placeholder="YYYY-MM-DD" v-model="appliedOn">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="applied-through">Applied through</label>
                    <input type="text" id="applied-through" placeholder="LinkedIn, Company website, email, etc." v-model="appliedThrough">
                </div>

            </main>
            
            <div class="job-modal__buttons modal__buttons">
                <button class="btn--primary">Save</button>
                <button class="btn--neutral-border">Reset</button>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'EditJob',
    data: function() {
        const { query } = this.$route;
        return {
            title: query.title || '',
            url: query.url || '',
            status: query.status || '',
            companyName: query.companyName || '',
            companyUrl: query.companyUrl || '',
            contract: query.contract || '',
            contact: query.contact || '',
            notes: query.notes || '',
            appliedOn: query.appliedOn || '',
            appliedThrough: query.appliedThrough || ''
        };
    }
}
</script>
