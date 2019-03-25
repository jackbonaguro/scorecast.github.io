<template>
  <Layout v-bind:nav-links="navLinks">
    <div class="content">
      <section id="Guide" class="jumbotron jumbotron-fluid
      d-flex flex-column justify-content-center align-content-center">
        <div class="my-5"></div>
        <div class="container" id="main">
          <h1>Guide to Writing ScoreCast Templates</h1>
          <hr class="mt-lg-5 mt-sm-3 w-75">
          <h3>Introduction</h3>
          <p>
            ScoreCast Templates let users keep track of almost any game you can think of, by
            defining exactly how user actions affect the game's state and how to display that
            state. This is made possible by two intertwining components: The logic definition and
            the view definition.
            On this page we will explain the structure of those two components and how
            they interact with each other and our app.
          </p>
          <h3>Logic</h3>
          <p>
            The Logic Template Component defines the user actions and state of a game. Changes made
            by the user can affect game state, and can have different effects based on the game
            state. These two facts make game templates completely configurable, and are made
            possible by our Operation Engine, a limited, pure-functional language interpreter
            inside our app.
          </p>
          <h3>Example: Best-of-5</h3>
          <p>
            In this section, we will use an existing template, Best-of-5, as a case study in how
            our engine works and what it is capable of.
          </p>
          <p>
            This template is a simple game with two named participants, and the ability to
            increment and decrement their scores by 1. The game ends when either player's score
            reaches 5.
          </p>
          <hr class="my-lg-5 w-50">
          <div class="row py-4">
            <div class="col-sm">
              <p>
                First, let's look at some of the game's variables. Variables can be an Int or a
                String, and make up the state of the game.
              </p>
              <p>
                Note that variables like team names will need to be entered by the game's operator
                prior to starting it. THey are called setup variables (more on that later).
              </p>
            </div>
            <div class="col-sm">
              <pre><code>{
  "variables": [
    {
      "name": "gameName",
      "type": "String"
    },
    {
      "name": "aName",
      "type": "String"
    },
    {
      "name": "bName",
      "type": "String"
    },

...</code></pre>
            </div>
          </div>
          <div class="row py-4">
            <div class="col-sm">
              <pre><code>{
  "name": "winScore",
  "type": "Int",
  "value": "if(or(gte(&lt;aScore&gt;,5),gte(&lt;bScore&gt;,5)),1,0)"
},

...

"winCondition": "winScore",</code></pre>
            </div>
            <div class="col-sm">
              <p>
                This variable, winScore, is a good example of a composite variable. it depends on
                variables aScore and bScore (not shown), and makes use of several operations to
                determine whether the game has been won or not.
              </p>
              <p>
                Later, we link the template's winCondition field to the winScore variable. This will
                determine whether the game is active or not, and display the win text to viewers.
              </p>
            </div>
          </div>
          <div class="row py-4">
            <div class="col-sm">
              <p>
                Here is an example of an action. This action, aPlus, will correspond to a button
                that the game's operator can tap. When they do so, it will increment aScore by 1,
                as indicated by the corresponding operation.
              </p>
            </div>
            <div class="col-sm">
              <pre><code>"actions": [
{
  "name": "aPlus",
  "variables": [
    "aScore"
  ],
  "values": [
    "add(&lt;aScore&gt;,1)"
  ]
    },

...</code></pre>
            </div>
          </div>
          <div class="row py-4">
            <div class="col-sm">
              <pre><code>"setup": [
  {
    "name": "gameName",
    "lock": true
  },

...</code></pre>
            </div>
            <div class="col-sm">
              <p>
                In the setup section, we can describe which variables can be given default values
                before starting a game. If the 'lock' field is true, then changing a variable will
                be disabled once the game starts.
              </p>
            </div>
          </div>
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
        title: 'Guide',
        href: '#Guide',
      }, {
        title: 'Reference',
        href: '/reference',
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
    }
  }
</style>
