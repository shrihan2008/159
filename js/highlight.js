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
        this.el.addEventListener("mouseenter", () => { const id = this.el.getAttribute("id"); 
        const postersId = [ "superman", "spiderman", "captain-aero", "outer-space", ]; 
        if (postersId.includes(id)) { 
           const postersContainer = document.querySelector("#posters-container"); 
           postersContainer.setAttribute("cursor-listener", { selectedItemId: id, }); 
           this.el.setAttribute("material", { color: "#1565c0" }); } }); 
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
    },

    tick: function() {
        const placesContainer = document.querySelector("#places-container");
    
        const { state } = placesContainer.getAttribute("tour");
    
        if (state === "view" || state === "change-view") {
    
          this.el.setAttribute("visible", true);
        } else {
          this.el.setAttribute("visible", false);
        }
      },

      update: function () { 
        const fadeBackgroundEl = document.querySelector("#fadeBackground"); 
        
        c = fadeBackgroundEl.children; 
        if (c.length > 0) {
             var i; for (i = 0; i <= c.length; i++) { 
                fadeBackgroundEl.removeChild(c[i]); } } 
        else { this.handleClickEvents(); } 
    },
})