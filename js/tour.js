AFRAME.registerComponent('tour',{
    init: function(){
        this.placesContainer=this.el
        this.createCards()

    },

    createCards:function(){
        const thumbnailsRef=[
            {
                id:"avengers",
                title:"AVENGERS",
                url:"../assets/thumbnails/avengers.jpeg"
            },

            {
                id:"spiderman",
                title:"SPIDERMAN",
                url:"../assets/thumbnails/spiderman.jpeg"
            },
            {
                id:"superman",
                title:"SUPERMAN",
                url:"../assets/thumbnails/superman.jpg"

            },

            {
                id:"calvin",
                title:"CALVIN",
                url:"../assets/thumbnails/Calvin.png"
            }
        ];
        let previousxposition=-60;
        for(var item of thumbnailsRef){
            const posx=previousxposition+25;
            const posy=10;
            const posz=-50;
            const position={x:posx,y:posy,z:posz};
            previousxposition=posx

            const borderei=this.createBorder(position,item.id);

            const thumbnail=this.createThumbnail(item);

            borderei.appendChild(thumbnail);

            const titlee1=this.createTitle(position,item);
            borderei.appendChild(titlee1);

            this.placesContainer.appendChild(borderei)

        }


    },

    createBorder:function(position,id){

        const entitye1=document.createElement('a-entity')
        entitye1.setAttribute("id",id)
        entitye1.setAttribute("visible",true)
        entitye1.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10,

        });

        entitye1.setAttribute("position",position)
        entitye1.setAttribute("material",{
            color:"pink",
            opacity:0.4
        });
        entitye1.setAttribute("cursor-listener",{})
        return entitye1
    },

    createThumbnail:function(item){
            const entitye1=document.createElement('a-entity')
       
            entitye1.setAttribute("visible",true)

            entitye1.setAttribute("geometry",{
                primitive:"circle",
                radius:9
    
            });

            entitye1.setAttribute("material",{
                
                src:item.url
            });
            return entitye1
    },

    createTitle:function(position,item){
        const entitye1=document.createElement('a-entity')
        entitye1.setAttribute("text",{
            font:'exo2bold',
            align:'center',
            width:60,
            color:"yellow",
            value:item.title
        });
        const e1pos=position;
        e1pos.y=-20
        entitye1.setAttribute("position",e1pos)
        entitye1.setAttribute("visible",true);
        

        return entitye1
    }

    
})