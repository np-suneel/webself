<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <img
      class="img-css"
      src="https://bf-qa.rdep.io:9191/img/logo.17736387.png"
      alt=""
      width="auto"
      height="100px"
      style="
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      "
    />
    <img
      src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
      alt=""
      width
    />
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
};
</script>

<style>
.loader {
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  background: white;
}

.fadeout {
  animation: fadeout 0.5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
