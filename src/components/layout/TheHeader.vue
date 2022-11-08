<template>
  <header>
    <img
      src="https://o.remove.bg/downloads/8c6bd9fd-7a94-49a8-8186-752a8ae66c62/1639982436425-removebg-preview.png"
      alt="thisimage"
    />
    <nav>
      <ul>
        <li><router-link to="/portal">Home</router-link></li>
        <li><router-link to="/leaves">Leave</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/attendance">Attendance</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: rgba(156, 241, 65, 0.984) ;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid grey;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin: 10px;
}
</style>
