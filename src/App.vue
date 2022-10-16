<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <nav class="nav">
      <div class="start">
        <RouterLink to="/" class="start-linked link">
          <img src="./assets/images/logo - Icon.png" alt="" class="icon-logo-img">
          <span class="word-logo">Chiba</span>
        </RouterLink>
      </div>
      <div class="float-mid">
        <div class="search-container">
          <input type="text" class="input search" placeholder="Search Recipes, Ingridients or Anything">
          <a type="submit" class="button search-button"><span class="icon search-icon"><img
                src="./assets/svgs/search.svg" alt=""></span></a>
        </div>
      </div>
      <div class="end">
        <div class="buttons" v-bind:class="{'active': showMobileMenu}">
          <RouterLink to="/login" class="link login"><span class="icon"><img src="./assets/svgs/login.svg"
                alt=""></span></RouterLink>
          <RouterLink to="/cart" class="link cart"><span class="icon"><img src="./assets/svgs/cart.svg" alt=""></span>
          </RouterLink>
          <RouterLink to="/cart" class="link heart"><span class="icon"><img src="./assets/svgs/heart.svg" alt=""></span>
          </RouterLink>
        </div>
        <div class="ham" @click="showMobileMenu = !showMobileMenu" v-bind:class="{'active': showMobileMenu}">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </nav>

    <section class="main">
      <RouterView />
    </section>

    <footer>

    </footer>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  position: relative;
  background-color: var(--nav-background);
  align-items: center;
  padding: 1rem;
}

.start {
  margin-left: 4%;
}

.start-linked {
  display: flex;
  align-items: center;

  margin-top: -10px;
}

.icon-logo-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.word-logo {
  font-family: 'Roboto', sans-serif;
  color: var(--background-color);
  font-weight: 500;
  font-size: 1.5em;

  margin-top: 10px;
}

.float-mid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: fit-content;
}

.icon img {
  width: 30px;
  height: 30px;
}


.search-icon img {
  object-position: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.search-container {
  width: 50vw;
}

.input.search {
  min-width: 100%;
  width: 100%;
  height: 50px;
}

.search-button {
  position: absolute;
  height: 50px;
  width: 50px;
  right: 0;
  background-color: #fef8f8;
}

.end {
  margin-right: 5%;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.main {
  min-height: 80vh;
}

footer {
  width: 100vw;
  height: 200px;
  background-color: var(--nav-background);
  color: white;
}

.ham {
  display: none;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: var(--gold);
}



@media screen and (max-width: 768px) {
  .word-logo {
    display: none;
  }

  .search-button {
    scale: 0.8;
  }

  .buttons {
    position: absolute;
    
    background-color: rgb(29, 26, 26);
    left: calc(-100vw + 50px + 1rem - 2px);
    
    width: 100vw;
    height: 200px;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 5;
    top: -200px;
    clip-path: ellipse(100% 70% at 50% 0%);

    transition: top 0.2s ease-in-out;
  }

  .buttons.active {
    top: -50px;
    
    transition: top 0.4s ease-in-out;
  }

  .ham {
    display: block;

    margin-left: auto;
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 6;
  }

  .ham.active {
    transform: translateY(50%);

    z-index: 5;
  }

  .ham.active .bar {
    position: absolute;
    transition: rotate 0.4s ease-in-out;
  }

  .ham.active .bar:first-child {
    rotate: 45deg;
  }

  .ham.active .bar:nth-child(2) {
    visibility: hidden;
  }

  .ham.active .bar:last-child {
    rotate: -45deg;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>
