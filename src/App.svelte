<script langt="ts">
  import { Route, Router } from "svelte-routing";
  import Community from "./routes/Community.svelte";
  import Home from "./routes/Home.svelte";

  export let url="";
</script>


<Router {url}>
  <Route path="/" component={Home}/>
  <Route path="/community" compoent={Community}/>
</Router>

