Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

const app = new Vue({
    el: '#app',
    data: {
        filters: [
            {
                name: 'grayscale',
                default: 0,
                value: 0,
                min: 0,
                max: 100,
                unit: '%'
            },
            {
                name: 'sepia',
                default: 0,
                value: 0,
                min: 0,
                max: 100,
                unit: '%'
            },
            {
                name: 'saturate',
                default: 100,
                value: 100,
                min: 0,
                max: 200,
                unit: '%'
            },
            {
                name: 'hue-rotate',
                default: 0,
                value: 0,
                min: 0,
                max: 360,
                unit: 'deg'
            },
            {
                name: 'invert',
                default: 0,
                value: 0,
                min: 0,
                max: 100,
                unit: '%'
            },
            {
                name: 'brightness',
                default: 100,
                value: 100,
                min: 0,
                max: 200,
                unit: '%'
            },
            {
                name: 'contrast',
                default: 100,
                value: 100,
                min: 0,
                max: 200,
                unit: '%'
            },
            {
                name: 'blur',
                default: 0,
                value: 0,
                min: 0,
                max: 10,
                unit: 'px'
            },
            {
                name: 'opacity',
                default: 100,
                value: 100,
                min: 0,
                max: 100,
                unit: '%'
            },
        ]
    },
    methods: {
        reset(filter) {
            filter.value = filter.default;
        }
    },
    computed: {
        filterStyles() {
            const styleObj = {};
            for (var i = 0; i < this.filters.length; i++) {
                const f = this.filters[i];
                if (f.value !== f.default) {
                    styleObj[`--${f.name}`] = `${f.value}${f.unit}`;
                }
            }
            return styleObj;
        },
        copyStyles() {
            const cssStyles = this.filters
                .map(filter => {
                    if (filter.value != filter.default) {
                        return `${filter.name}(${filter.value}${filter.unit})`
                    }
                })
                .filter(item => item != null)
                .join(' ');
            console.log(cssStyles.length)
            return cssStyles.length ? `filter: ${cssStyles};` : "";
        },
    }
})