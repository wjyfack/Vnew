<template>
  <div id="app">
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
img {
	width: 100%;
}
html, body {
	overflow-x: hidden;
}
</style>
