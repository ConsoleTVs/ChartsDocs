<template>
    <div class="codefund">
        <div ref="codefund" id="codefund_ad"></div>
    </div>
</template>

<script>
    export default {
        name: 'CodeFund',
        props: {
            propertyId: {
                type: String,
                required: true,
                validator: value => {
                    const r = RegExp(
                        "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
                        "i"
                    );
                    return r.test(value);
                }
            }
        },
        mounted () {
            const script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute(
                "src",
                `https://codefund.io/scripts/${this.propertyId}/embed.js`
            );
            this.$refs.codefund.appendChild(script);
        }
    }
</script>