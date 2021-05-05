<template>
    <section>
        <div class="block">
            <b-field grouped group-multiline>
                <div class="control">
                    <b-switch v-model="rounded"> Rounded </b-switch>
                </div>
            </b-field>
        </div>

        <b-avatar icon-fallback="account" :rounded="rounded" />

        <b-avatar src="https://picsum.photos/id/error/600/400" username="Mace Windu" :rounded="rounded" />
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
