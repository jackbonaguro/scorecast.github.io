<template>
  <div id="Footer" class="d-flex flex-column justify-content-center
      align-content-center text-center">
    <div class="container pb-5">
      <hr class="w-75 d-sm-block d-none"/>
      <div class="row py-2">
        <div class="col-sm-2"></div>
        <div class="col-sm-2 text-sm-left">
          © 2019 ScoreCast
        </div>
        <scrollactive class="col-sm-4"
                      active-class="is-active"
                      :duration="800"
                      bezier-easing-value=".5,0,.35,1">
          <a class="scrollactive-item" href="#Home">
            <font-awesome-icon class="fa" icon="home" size="3x"></font-awesome-icon>
          </a>
        </scrollactive>
        <div class="col-sm-2 text-sm-right">
          <a href="https://github.com/scorecast">Github</a>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
@import '../assets/main';

#Footer {
  background-color: $lightergray;
  font-size: smaller;

  a {
    .fa {
      color: $gray;
      font-size: large;
    }
  }
}
</style>
