<template>

    

    
       

        <div class=" bg-success"> 


       
             <span>  <router-link  :to="{name: 'countprice'}" class="btn btn-warning my-2 mx-2">Count </router-link> </span> 
       


              <router-view></router-view>
           

        </div>

          
            

          
       
</template>

<script>


    import { computed, ref} from 'vue'

    export default {
    
        components: { },

    
        
      
    

}
</script>

