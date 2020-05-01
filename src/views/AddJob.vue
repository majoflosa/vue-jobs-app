<template>
    <section class="job-modal modal">
        <div class="job-modal__inner modal__inner">
            
            <header class="job-modal__header modal__header">
                <h1 class="job-modal__title modal__title">Edit Application Information</h1>
                <router-link 
                    to="/" 
                        class="job-modal__close modal__close">
                        <span>Close</span> <i class="fal fa-times"></i>
                </router-link>
                <!-- <h3 class="edit-modal__subtitle">Front End Developer</h3> -->
            </header>

            <main class="job-modal__body modal__body">
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-title">Job Position (required)</label>
                    <input type="text" id="job-title" placeholder="Front End Developer">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-url">Job Posting URL</label>
                    <input type="text" id="job-url" placeholder="http://www.jobs.com/1234">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-company">Company (required)</label>
                    <input type="text" id="job-company" placeholder="Company name">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-company-url">Company Website</label>
                    <input type="text" id="job-company-url" placeholder="http://www.companyname.com/">
                </div>
                
                <div class="job-modal__field-group modal__field-group">
                    <label for="job-contract">Contract Type</label>
                    <input type="text" id="job-contract" placeholder="Full-time, Part-time, Hourly, etc.">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-contact">Contact</label>
                    <input type="text" id="job-contact" placeholder="jobs@companysite.com">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="job-notes">Notes</label>
                    <textarea type="text" id="job-notes" placeholder="About this job..."></textarea>
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="applied-on">Applied on</label>
                    <input type="text" id="applied-on" placeholder="YYYY-MM-DD">
                </div>

                <div class="job-modal__field-group modal__field-group">
                    <label for="applied-through">Applied through</label>
                    <input type="text" id="applied-through" placeholder="LinkedIn, Company website, email, etc.">
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
    name: 'AddJob'
}
</script>
