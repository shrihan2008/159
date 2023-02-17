AFRAME.registerComponent('cursor-listener',{

    schema:{
        selected_item_id:{default:"",type:"string"}
    },


    init:function(){
        this.handleMouseEnterEvents();
    
        this.handleClickEvents()
    },

    handlePlacesListState:function(){
        const id=this.el.getAttribute("id");
        const places_id=["avengers","superman","spiderman","calvin"];

        if(places_id.includes(id)){
            const placesContainer=document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-listener",{
                selected_item_id:id,
            });
            this.el.setAttribute("material",{
                color:"red",
                opacity:1
            })

        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },

   

    handleClickEvents:function(){
        this.el.addEventListener("click",evt=>{
            const placesContainer=document.querySelector("#places_container");
            const {state} = placesContainer.setAttribute("tour")

            if(state==="places_list"){
                const id=this.el.getAttribute("id");
                const places_id=["avengers","superman","spiderman","calvin"];
                if(places_id.includes(id)){
                    placesContainer.setAttribute("tour",{
                        state:"view",
                        selected_card:id
                    })

                }

            }
        })
    }
})