<template>
<div>
    <h1>HOME</h1>
    <ProjectCard 
        v-for="(project, index) in projects" 
        :project-name="projects[index].projectName" 
        :project-description="projects[index].projectDescription"
    />
</div>

</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue"

const projects = [
    { projectName: 'Project 1', projectDescription: 'It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).'},
    { projectName: 'Project 2', projectDescription: 'Description 2'},
    { projectName: 'Project 3', projectDescription: 'Description 3'}
]
</script>

<style>

</style>