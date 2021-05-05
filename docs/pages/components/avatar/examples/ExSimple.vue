<template>
    <section>
        <div class="block">
            <b-field grouped group-multiline>
                <div class="control">
                    <b-switch v-model="rounded"> Rounded </b-switch>
                </div>
            </b-field>
        </div>

        <b-avatar src="https://picsum.photos/id/237/256/256" :rounded="rounded" />

        <b-avatar username="Master Yoda" :size="256" :rounded="rounded" />
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
