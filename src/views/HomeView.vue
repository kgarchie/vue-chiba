<script setup>

</script>

<template>
  <main>
    <ul class="list-container">
      <li class="card" v-for="recipe in featuredRecipes" v-bind:key="recipe.id">
        <h3 class="card-header">{{recipe.title}}</h3>
        <figure class="image">
          <img v-bind:src="recipe.get_main_image_url" alt="">
          <figcaption>
            <div class="details">
              <div class="serves">
                <p>Serves:</p>
                <p>{{recipe.serve_people_num}} <span>People</span></p>
              </div>
              <div class="time">
                <p>Time:</p>
                <p>{{recipe.prep_time}} <span>Hours</span></p>
              </div>
              <div class="curator">
                <p>By:</p>
                <p v-for="detail in recipe.get_authors" v-bind:key="detail.slugs"><span
                    v-for="author in detail.names">{{author}}</span> <span v-for="slug in detail.slugs">@{{slug}}</span>
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.list-container {
  width: 100vw;
  margin-top: 50px;

  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

}

.card {
  width: 500px;
  height: 400px;
  border-radius: 50px;
  
  isolation: isolate;

  position: relative;
  
}

.card-header {
  position: absolute;
  top: 50px;
  left: 50px;

  z-index: 4;
  color: var(--background-color);
  width: calc(100% - 100px);
  height: 50px;
  background-color: black;
  
  border-radius: 50px;
  text-align: center;
  padding: 0.7rem;
  line-height: normal;
  opacity: 0.5;
  
  backdrop-filter: blur(100px);
}

.image {
  display: flex;
  flex-direction: column;
}

.image img {
  width: 100%;
  height: 400px;

  border-radius: 50px;
  z-index: 1;
  
  

  object-fit: cover;
}

.card figcaption {
  margin-top: -99px;
  height: 100px;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 2;

  border-radius: 50px;
}

.details {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
}

.details>div>p:last-child {
  color: #fba115;
  font-size: small;
}

.details>div>p:last-child>span {
  color: #d8c1cd;
}

@media screen and (max-width: 768px) {
  .card {
    scale: 0.95;
    /* Temporary fix */
  }
}
</style>


<script>
import axios from 'axios'


export default {
  name: 'HomeVue',
  data() {
    return {
      featuredRecipes: [],
    }
  },
  components: {
  },

  mounted() {
    this.getFeaturedRecipes();
  },

  methods: {
    getFeaturedRecipes() {
      axios
        .get('/api/v1/featured-recipes/')
        .then(response => {
          this.featuredRecipes = response.data
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
  }
}
</script>
