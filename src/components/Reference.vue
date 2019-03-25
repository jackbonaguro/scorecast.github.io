<template>
  <Layout v-bind:nav-links="navLinks">
    <div class="content">
      <section id="Guide" class="jumbotron jumbotron-fluid
      d-flex flex-column justify-content-center align-content-center">
        <div class="my-5"></div>
        <div class="container" id="main">
          <h1>ScoreCast Template Engine Reference</h1>
          <hr class="mt-lg-5 mt-sm-3 w-75">
          <h2>Logic Engine</h2>
          <scrollactive class="reference"
                        active-class="active"
                        :offset="80"
                        :duration="800"
                        bezier-easing-value=".5,0,.35,1">
            <h5 id="literals">Literal Types</h5>
            <div class="row">
              <div class="col-sm text-danger">
                Int
              </div>
              <div class="col-sm float-sm-right">
                An Integer as can be interpreted by Javascript. Ex. `6`, `7000`.
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">
                String
              </div>
              <div class="col-sm float-sm-right">
                A String as can be interpreted by Javascript (single quotes). Ex. `'Hello'`.
              </div>
            </div>
            <h5 id="variables">Variables</h5>
            <p>
              Variables store a <a href="#values" class="scrollactive-item">value</a> of either
              <a href="#literals" class="scrollactive-item">literal type</a>, and are stored for
              the life of a game. Each is identified by a unique name.
            </p>
            <h5 id="values">Values</h5>
            <p>
              A value is either a <a href="#literals" class="scrollactive-item">literal</a> or a
              <a href="#variables" class="scrollactive-item">variable</a>, and they are used as
              inputs to <a href="#operations">operations</a>. Ex. `-10`, `'World!'`,
              `&lt;varName&gt;`.
            </p>
            <h5 id="operations">Operation</h5>
            <p>
              An operation is a function that takes in some _values_ and evaluates to a value of
              one of the <a href="#literals" class="scrollactive-item">literal types</a>. They
              take the form of a cascading series of  smaller <a href="#operations"
                                                                 class="scrollactive-item">
              operations</a>. Ex. `gt(add(1,2),4)` -&gt; `0`.
            </p>
            <h5 id="actions">Actions</h5>
            <p>
              An action is a mapping storing some number of <a href="#operations"
                                                               class="scrollactive-item">
              operations</a> into <a href="#variables" class="scrollactive-item">variables</a>,
              that affects the state of the game. Ex.
              [`&lt;var1&gt;`,`&lt;var2&gt;`] &lt;= [`12`,`gt(&lt;var1&gt;,10)`].
            </p>
            <h5>Global Options</h5>
            <div class="row">
              <div class="col-sm text-danger">
                winCondition
              </div>
              <div class="col-sm float-sm-right">
                The name of a <a href="#variables" class="scrollactive-item">variable</a> that
                determines whether a game is still active (value `0`) or not (value `1`).
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">
                winText
              </div>
              <div class="col-sm float-sm-right">
                The name of a <a href="#variables" class="scrollactive-item">variable</a>
                containing the text to display once 'winCondition' is triggered.
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">
                setup
              </div>
              <div class="col-sm float-sm-right">
                A list of <a href="#variables" class="scrollactive-item">variables</a> that can be
                entered before the game is started. Includes a per-variable setting, 'lock', that
                determines whether or not it can be changed after the starting the game.
              </div>
            </div>
          </scrollactive>
          <hr class="my-lg-5 w-50">
          <h2>View Engine</h2>
          <scrollactive class="reference"
                        active-class="active"
                        :offset="80"
                        :duration="800"
                        bezier-easing-value=".5,0,.35,1">
            <h5>Elements</h5>
            <div class="row">
              <div class="col-sm text-danger">Ref</div>
              <div class="col-sm float-sm-right">
                The name of a <a href="#variables" class="scrollactive-item">variable</a> or <a
                href="#actions" class="scrollactive-item">action</a> to be displayed. Variables will
                display as dynamic text, while actions will display as buttons.
              </div>
            </div>
            <h6>Sizing</h6>
            <div class="row">
              <div class="col-sm text-danger">px</div>
              <div class="col-sm float-sm-right">
                The position in the x-dimension of the center of the element, as a percentage. Ex.
                `10%`.
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">py</div>
              <div class="col-sm float-sm-right">
                The position in the y-dimension of the center of the element, as a percentage. Ex.
                `75%`.
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">w</div>
              <div class="col-sm float-sm-right">
                The width of a text element in pixels, as an integer. Overflow will go onto a new
                line. Ex. `100`.
              </div>
            </div>
            <div class="row">
              <div class="col-sm text-danger">size</div>
              <div class="col-sm float-sm-right">
                The size of an element's text as an integer. Ex. '20'.
              </div>
            </div>
            <h5>Global Options</h5>
            <div class="row">
              <div class="col-sm text-danger">background</div>
              <div class="col-sm float-sm-right">
                The background color of the game screen, as a hex selector. Ex. `#ffcdea`.
              </div>
            </div>
          </scrollactive>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </Layout>
</template>

<script>
import Layout from './Layout';
import Footer from './Footer';

export default {
  name: 'Reference',
  components: { Layout, Footer },
  data() {
    return {
      navLinks: [{
        title: 'Guide',
        href: '/templates',
      }, {
        title: 'Reference',
        href: '#Reference',
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

    pre {
      border-radius: 10px;
      background-color: $lightergray;
      color: $crimson;
      padding: 1.5em;

      code {
        margin: auto;
      }
    }

    .reference {
      padding-left: 5%;
      padding-right: 5%;

      p, .row {
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 1em;
      }
      h3 {
        padding-top: .5em;
        padding-bottom: .5em;
      }
      h5 {
        margin-bottom: 0;
        padding-top: .5em;
        padding-bottom: .5em;
      }
    }
  }
</style>
