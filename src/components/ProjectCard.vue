<template>
  <div class="bg-red-400">
    <div class="mx-auto flex-col max-w-3xl py-12 px-4 sm:flex sm:items-start sm:px-6 lg:flex lg:items-start 
		lg:justify-between lg:py-16 lg:px-8">

    <!--Project Name-->
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block text-indigo-600">{{ projectName }}</span>
      </h2>

    <!--Project Description-->
    <h2 class="text-2xl font-bold flex justify-items-start tracking-tight text-gray-900 sm:text-2xl">
        <span class="block">{{ projectDescription }}</span>
      </h2>



        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<!--button 1-->
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center 
					rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base 
					font-medium text-white hover:bg-indigo-700">Get started</a>
        </div>


				<!--button 2-->
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center rounded-md 
					border border-transparent bg-white px-5 py-3 text-base font-medium 
					text-indigo-600 hover:bg-indigo-50">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup lang=ts>
	import { ref } from 'vue'

	defineProps<{
		projectName?: string
		projectDescription?: string
	}>()



  </script>