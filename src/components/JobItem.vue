<template>
    <article class="main__job expanded">
        <header class="main__job-hdr">
            <h3 class="main__job-title"><a href="#">{{ job.title }}</a></h3>
            <span class="main__job-status">{{ job.status }}</span>
            <a href="#" class="main__job-details-link">Expand
                <!-- <i class="far fa-caret-circle-down"></i>
                <i class="far fa-caret-circle-up"></i> -->
            </a>
            <div class="main__job-company">{{ job.company.name }}</div>
        </header>
        <div class="main__job-body">
            <main class="main__job-info">
                <span class="main__job-contract">Contract type: <strong>{{ job.contract_type }}</strong></span>
                <span class="main__job-contact">Contact: <strong>{{ job.contact ? job.contact.address : '' }}</strong></span>
                <div class="main__job-notes">
                    <strong>Notes:</strong>
                    <p>{{ job.notes }}</p>
                </div>
            </main>
            <footer class="main__job-ftr">
                <p>Applied on <strong>{{ job.date_applied }}</strong> through <strong>{{ job.applied_through }}</strong></p>
                <div class="main__job-buttons clearfix-after">
                    <a href="#" class="main__job-edit">Edit</a>
                    <a href="#" class="main__job-delete">Delete</a>
                </div>
            </footer>
        </div>
    </article>
</template>

<script>
export default {
    name: 'JobItem',
    props: ['job']
}
</script>