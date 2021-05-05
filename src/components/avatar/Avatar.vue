<template>
    <div class="b-avatar-wrapper" :style="styleWrapper">
        <b-image
            :src="src"
            :alt="alt"
            :src-fallback="srcFallback"
            :icon-fallback="iconFallback"
            :rounded="rounded"
            v-if="isImage"
            @error="onError" />
        <span
            :style="styleText"
            :title="alt"
            v-else-if="!isImage && !username">
            <b-icon :icon="iconFallback" :custom-size="null" />
        </span>
        <span
            :style="styleText"
            :title="alt"
            v-else>
            {{ getInitials(username) }}
        </span>
    </div>
</template>

<script>
import Image from '../image/Image'
import config from '../../utils/config'

export default {
    name: 'BAvatar',
    components: {
        [Image.name]: Image
    },
    props: {
        src: String,
        alt: String,
        srcFallback: String,
        iconFallback: {
            type: String,
            default: 'account'
        },
        rounded: Boolean,
        size: {
            type: Number,
            default: () => {
                if (typeof config.defaultAvatarSize === 'number') {
                    return config.defaultAvatarSize
                } else {
                    return 128
                }
            }
        },
        username: String
    },
    data() {
        return {
            imgError: false
        }
    },
    computed: {
        isImage() {
            return !this.imgError && Boolean(this.src)
        },
        styleWrapper() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`
            }
        },
        styleText() {
            return {
                fontSize: !this.username ? `${Math.floor(this.size / 30)}em` : `${Math.floor(this.size / 40)}em`,
                borderRadius: this.rounded ? '50%' : 0
            }
        }
    },
    methods: {
        getInitials(username) {
            const allNames = username.trim().split(' ')
            const initials = allNames.reduce((acc, curr, index) => {
                if (index === 0 || index === allNames.length - 1) {
                    acc = `${acc}${curr.charAt(0).toUpperCase()}`
                }
                return acc
            }, [''])
            return initials
        },
        onError(e) {
            this.imgError = true
        }
    }
}
</script>
