
AFRAME.registerComponent('carcomponent',{
    schema:{
        carModel:{
            type:'string',
            default:'../assets/mazda_rx7_stylised/scene.gltf'
        },
        clickCounter:{
            type:'number',
            default:0
        }
    },
    init: function(){
        this.el.setAttribute('position',{
            x:0,
            y:0,
            z:100
        })
        this.el.setAttribute('rotation',{
            x:90,
            y:0,
            z:0
        })
        this.el.setAttribute('scale',{
            x:0.25,
            y:0.25,
            z:0.25
        })
        this.el.setAttribute('gltf-model',this.data.carModel)
    },
    update: function(){
        window.addEventListener('click', (e)=>{
            this.data.clickCounter+=1;
            console.log(this.data.clickCounter)
            if(this.data.clickCounter==1){
                this.el.setAttribute('rotation',{
                    x: 0,
                    y: 20,
                    z: 0
                })
            }else if(this.data.clickCounter==2){
                this.el.setAttribute('rotation',{
                    x: 0,
                    y: 40,
                    z: 0
                })
            }else{
                this.data.clickCounter=0;
            }
        })
    }
})