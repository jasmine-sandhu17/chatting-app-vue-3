import { createVuetify } from 'vuetify'
// import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { VCard, VRow, VCol } from 'vuetify/components'
import { Ripple } from 'vuetify/directives'

const vuetify = createVuetify({
    components: {
        VCard,
        VRow,
        VCol
    },
    directives: {
        Ripple,
    },
    icons: {
        defaultSet: 'mdi',
    },
})

export default vuetify