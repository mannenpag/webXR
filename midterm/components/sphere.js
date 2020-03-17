AFRAME.registerComponent('sphere-properties', {
    schema: {
        radius: {type: 'number', default: .8},
        widthSegments: {type: 'number', default: 1},
        heightSegments: {type: 'number', default: 1},
        color: {type: 'color', default: '#FAFAFA'},
        soundDur: {type: 'number', default: 300},
        x: {type: 'number', default: 0},
        y: {type: 'number', default: 0},
        z: {type: 'number', default: 0}
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        let active = false;

        el.setAttribute('position', {
            x: this.data.x,
            y: this.data.y,
            z: this.data.z
        })
        el.setAttribute('radius', data.radius);
        el.setAttribute('segments-height', data.widthSegments);
        el.setAttribute('segments-width', data.heightSegments);
        el.setAttribute('color', data.color);

        el.addEventListener('click', () => {
            if (!active) {
                el.setAttribute('segments-height', 32);
                el.setAttribute('segments-width', 32);
                el.setAttribute('color', '#dacca1');
                console.log("Active");

                el.setAttribute('animation', {
                    property: 'radius',
                    to: '1.2',
                    loop: 'true',
                    elasticity: '400',
                    easing: 'easeInQuad',
                    dur: data.soundDur,
                });

            }
            if (active) {
                el.setAttribute('radius', 1);
                el.setAttribute('segments-height', data.widthSegments);
                el.setAttribute('segments-width', data.heightSegments);
                el.setAttribute('color', data.color);
                console.log("Not Active");

                el.removeAttribute('animation');
            }
            active = !active;
        })
    },
});


