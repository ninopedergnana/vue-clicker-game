<template>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex mx-10 items-center justify-between h-16 sm:invisible fixed bottom-0 inset-x-0">
          <router-link to="/login">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'arrow-right-to-bracket']" />
          </router-link>
          <router-link to="/">
            <font-awesome-icon class="w-7 h-7" :icon="['fas', 'house']" />
          </router-link>
          <router-link to="/clicky">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'fire-flame-curved']" />
          </router-link>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link class="font-bold text-xl hidden sm:block routerLink" to="/">Appy</router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4" v-if="$store.state.user">
              <router-link class="routerLink" v-for="item in navigation" :key="item.name" 
              :aria-current="item.current ? 'page' : undefined" :to="item.to" >{{ item.name }}</router-link>
            </div>
            <div class="flex space-x-4" v-if="!$store.state.user">
              <router-link class="routerLink" v-for="item in navigationLoggedOut" :key="item.name" 
              :aria-current="item.current ? 'page' : undefined" :to="item.to" >{{ item.name }}</router-link>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class='profileButton'>
                <span class="sr-only">Open user menu</span>
                <div class="h-8 w-8 bg-black rounded-full" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="/" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" @click="$store.dispatch('logout')" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'


const navigation = [
  { name: 'Feed', to: '/feed', current: false },
]

const navigationLoggedOut = [
  { name: 'Register', to: '/register', current: false },
  { name: 'Login', to: '/login', current: false }
]
    
const store = useStore();

onBeforeMount(() => {
  store.dispatch('fetchUser')
})

</script>