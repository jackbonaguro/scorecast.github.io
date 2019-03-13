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
          <div>
            <h5>Literal Types</h5>
              <br>
                Int  An Integer as can be interpreted by Javascript. Ex. `6`, `7000`.
              <br>
                String  A String as can be interpreted by Javascript (single quotes). Ex. `'Hello'`.
              <br>
            <h5>Variables</h5>
              <br>
                Variables store a _value_ of either _literal type_, and are stored for the life of a
              game. Each is identified by a unique name.
              <br>
            <h5>Values</h5>
              <br>
                A value is either a _literal_ or a _variable_, and they are used as inputs to
              _operations_. Ex. `-10`, `'World!'`, `&lt;varName&gt;`.
              <br>
            <h5>Operation</h5>
              <br>
                An operation is a function that takes in some _values_ and evaluates to a value of
              one of the _literal types_. They take the form of a cascading series of  smaller
              _operations_. Ex. `gt(add(1,2),4)` -&gt; `0`.
              <br>
            <h5>Actions</h5>
              <br>
                An action is a mapping storing some number of _operations_ into _variables_, that
              affects the state of the game. Ex.
              [`&lt;var1&gt;`,`&lt;var2&gt;`] &lt;= [`12`,`gt(&lt;var1&gt;,10)`].
              <br>
              <br>
            <h5>Global Options</h5>
              <br>
                winCondition  A required variable that determines whether a game is still active
              (value `0`) or not (value `1`).
              <br>
                winText  The text to display once _winCondition_ is triggered.
              <br>
                setup  A list of variables that can be entered before the game is started. Includes
              a per-variable setting, 'lock', that determines whether or not it can be changed
              after the starting the game.
          </div>
          <hr class="my-lg-5 w-50">
          <h2>View Engine</h2>
          <div>
          <h5>Elements</h5>
            <br>
              Ref
            <br>
              Sizing
            <br>
              px
            <br>
              py
            <br>
              w
            <br>
              size
            <br>
            <br>
          <h5>Global Options</h5>
            <br>
            background
          </div>
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

    #main {
      h3 {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
      }
      h5 {
        margin-bottom: 0;
        padding-top: 1em;
        padding-bottom: 1em;
      }
    }
  }
</style>
