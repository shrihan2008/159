AFRAME.registerComponent('info-banner',{

    schema:{
        selected_item_id:{default:"",type:"string"}
    },

    init: function(){
        this.placesContainer=this.el
        this.createCards()
       
        this.handleMouseLeaveEvents()

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
    },

    createCards:function(){
        const thumbnailsRef=[
            {
                id:"avengers",
                title:"AVENGERS are earth's mightieset heroes created by stan lee",
                url:"../assets/thumbnails/avengers.jpeg"
            },

            {
                id:"spiderman",
                title:"SPIDERMAN There are more than 100 different versions of Spider-Man across the comic books ",
                url:"../assets/thumbnails/spiderman.jpeg"
            },
            {
                id:"superman",
                title:"Superman ran from 1939 to 1986 for 423 issues, with 12 Annuals published between 1960–1986 (1960–1964 and 1983–1986). In 1986, this series was retitled The Adventures of Superman, continuing with the same numbering from 1987 to 2006 (issue #424-649), with nine Annuals also published.",
                url:"../assets/thumbnails/superman.jpg"

            },

            {
                id:"calvin",
                title:"Calvin and Hobbes is a daily American comic strip created by cartoonist Bill Watterson that was syndicated from November 18, 1985, to December 31, 1995",
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

    handleClickEvents:function(){
       if(selected_item_id){
        fadebg.setAttribute("visible",true)
        fadebg.setAttribute("info-banner",{
            itemId:selected_item_id
        })

        titlee1.setAttribute("visible",false)
        cursore1.setAttribute("position",{x:0,y:0,z:-1})
        cursore1.setAttribute("geometry",{
            radiusInner:0.03,
            radiusOuter:0.04
        })
       }

       else{
        fadebg.setAttribute("visible",false)
        titlee1.setAttribute("visible",true)
        cursore1.setAttribute("position",{x:0,y:0,z:-3})
        cursore1.setAttribute("geometry",{
            radiusInner:0.08,
            radiusOuter:0.09
        })
       }
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selected_item_id}=this.data;
            if(selected_item_id){
                const el=document.querySelector(`#${selected_item_id}`);
                const id=el.getAttribute("id")
                if(id==selected_item_id){
                    el.setAttribute("material",{color:"red",opacity:1})
                }
            }
        })
    },
})