<template>
  <Layout v-bind:nav-links="navLinks">
    <div class="content">
      <section id="Home" class="jumbotron jumbotron-fluid
      d-flex flex-column justify-content-center align-content-center">
        <div class="my-5"></div>
        <div class="container">
          <div class="row">
            <div class="">
              <h1 class="display-3">Live Scoring.<br>For the Rest of us.</h1>
            </div>
            <div class="col">
            </div>
          </div>
          <hr class="my-lg-5 my-sm-3 w-75">
          <p class="lead text-dark font-weight-normal">ScoreCast is a score tracking system
            for non-professional sports. By crowd-sourcing the hard parts, our App becomes
            customized to your community. And our tools are powered by you, not by shady
            advertisers.
          </p>
          <br>
          <p class="lead">
            <scrollactive active-class="is-active"
                          :duration="800"
                          bezier-easing-value=".5,0,.35,1">
              <a class="btn btn-danger btn-lg scrollactive-item" href="#Why">Learn more</a>
            </scrollactive>
          </p>
        </div>
      </section>
      <section id="Why" class="jumbotron jumbotron-fluid
      d-flex flex-column justify-content-center align-content-center">
        <div class="container">
          <div class="row">
            <div class="col align-items-lg-center">
              <img src="../assets/img/image10.png" width="260" class="screenshot"/>
            </div>
            <div class="col d-flex flex-column justify-content-center align-content-center">
              <h1 class="display-5 text-light">Discover new Experiences.</h1>
              <hr class="my-3 border-light w-75">
              <p class="lead text-light">
                <span class="font-weight-bolder">Sports bring people together.</span>
                And not just the Big Games: Every day millions of people use sports to keep in
                touch and to stay connected.
              </p>
              <p class="lead text-light">
                With ScoreCast, you can stay in touch even when you can't be there.
              </p>
            </div>
          </div>
          <br>
        </div>
      </section>
      <section id="Video" class="jumbotron jumbotron-fluid
      d-flex flex-column justify-content-center align-content-center">
        <div class="container text-center">
          <!--h1 class="display-5 text-dark">Introductory Video:</h1>
          <hr class="my-5 border-dark w-25"-->
          <video controls autoplay id="videoPlayer" class="video" width="100%">
            <source src="../assets/video.mp4" type="video/mp4">
          </video>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </Layout>
</template>

<script>
import Layout from './Layout';
import Footer from './Footer';

export default {
  name: 'Content',
  components: { Layout, Footer },
  data() {
    return {
      navLinks: [{
        title: 'Why?',
        href: '#Why',
      }, {
        title: 'Video',
        href: '#Video',
      }, {
        title: 'Templates',
        href: '/templates',
      }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/main.scss';

  .content {
    section {
      min-height: 100vh;
    }

    .jumbotron {
      margin: 0;
    }

    #Home {
      background-image:
        linear-gradient( $lightergray 25%, mix(rgba(0,0,0,0.5), $white) 75% ),
        url("../assets/img/joshua-ness-109310-unsplash.jpg");
      //background-blend-mode: multiply;
      background-size: cover;
      min-height: 113vh;
      //padding-bottom: 150px;
    }
    #Why {
      background-image:
        linear-gradient(0.65turn, $black 25%, $darkgray);
      clip-path: polygon(0 6%,100% 0,100% 100%,0 100%);
      background-clip: border-box;
      margin-top: -100px;
    }
    #Video {
      clip-path: polygon(0 6%,100% 0,100% 100%,0 100%);
      margin-top: -100px;
      padding-top: 150px;
      background-color: $lightergray;
    }

    .screenshot {
      animation: float-screenshot 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    }

    .video {
      //flex-grow: 1;
    }

    .tagline {
      font-weight: 400;
      font-size: 2.5rem;
      line-height: normal;
    }
  }
</style>
