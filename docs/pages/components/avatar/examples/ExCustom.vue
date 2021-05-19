<template>
    <section>
        <div class="block">
            <b-field grouped group-multiline>
                <div class="control">
                    <b-switch v-model="rounded"> Rounded </b-switch>
                </div>
            </b-field>
        </div>

        <b-avatar username="Darth Vader" :rounded="rounded" custom-class="has-background-dark has-text-light" />

        <b-avatar username="Anakin Skywalker" :rounded="rounded" custom-class="has-background-info" />

        <b-avatar username="Leia Organa" :rounded="rounded" custom-class="has-background-warning has-text-dark" />

        <b-avatar username="Han Solo" :rounded="rounded" custom-class="has-background-success has-text-primary" />
    </section>
</template>

<script>
export default {
        data() {
            return {
                rounded: true,
            }
        }
    }
</script>
