<template>
	<div id="app" style="max-width: 780px; height: 100vh; margin: auto;">
		<router-view/>
	</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #adadad;
}

nav {
  padding: 12px;
}

nav a {
  color: #adadad;
}

nav a:hover {
  color: #77b2c4;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #c5be5c;
}
</style>
