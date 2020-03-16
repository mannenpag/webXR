AFRAME.registerComponent('ripple', {
    schema: {
        amount: {type: 'number', default: 4},
        radiusInner: {type: 'number', default: 1.28},
        radiusOuter: {type: 'number', default: 1.3},
        color: {type: 'color', default: '#FAFAFA'},
    }, 

    init: function () {
        let data = this.data;
        let el = this.el;

        for (let i = 0; i < this.data.amount; i++) {
            let circle = document.createElement('a-entity');
            circle.setAttribute('position', '0 -1 0');
            circle.setAttribute('rotation', '90 90 90');
            circle.setAttribute('geometry', {
                primitive: 'ring',
                radiusInner: data.radiusInner - (i*0.2), 
                radiusOuter: data.radiusOuter - (i*0.2)
            })
            circle.setAttribute('material', {
                side: 'double',
                color: data.color
            })
            el.appendChild(circle);
        }
    }
})