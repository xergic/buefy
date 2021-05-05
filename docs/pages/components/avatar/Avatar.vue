<template>
    <div>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical>
            <p>
                Displays user's avatar from <code>src</code> or name initials from <code>username</code> if provided.
            </p>
        </Example>

        <Example :component="ExFallbacks" :code="ExFallbacksCode" title="Fallbacks" vertical>
            <p>
                You can use <code>alt</code> to display an alternative text if the <code>src</code> fails to load.
            </p>
            <p>
                You can also use <code>src-fallback</code> or <code>icon-fallback</code> to display another image or icon if the original fails to load.
            </p>
        </Example>

        <ApiView :data="api"/>
        <VariablesView :data="variables"/>
    </div>
</template>

<script>
    import api from './api/avatar'
    import variables from './variables/avatar'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
    import ExFallbacks from './examples/ExFallbacks'
    import ExFallbacksCode from '!!raw-loader!./examples/ExFallbacks'

    export default {
        data() {
            return {
                api,
                variables,
                ExSimple,
                ExSimpleCode,
                ExFallbacks,
                ExFallbacksCode
            }
        }
    }
</script>