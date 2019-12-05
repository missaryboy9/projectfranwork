<template>
  <div class="dashboard-container">
    <div id="echarts">1</div>
    <!-- <div
      id="myDiagramDiv"
      style="width:400px; height:400px; background-color: #DAE4E4;"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Dashboard',
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        ]
      }
    };
  },
  mounted() {
    this.initecharts();
    this.testgojs();
  },
  methods: {
    testgojs() {
      // var $ = go.GraphObject.make; // for conciseness in defining templates
      // console.log($);
      // var myDiagram = $(
      //   go.Diagram,
      //   'myDiagramDiv', // create a Diagram for the DIV HTML element
      //   {
      //     // enable undo & redo
      //     'undoManager.isEnabled': true
      //   }
      // );

      // // define a simple Node template
      // myDiagram.nodeTemplate = $(
      //   go.Node,
      //   'Auto', // the Shape will go around the TextBlock
      //   $(
      //     go.Shape,
      //     'RoundedRectangle',
      //     { strokeWidth: 0, fill: 'white' }, // default fill is white
      //     // Shape.fill is bound to Node.data.color
      //     new go.Binding('fill', 'color')
      //   ),
      //   $(
      //     go.TextBlock,
      //     { margin: 8 }, // some room around the text
      //     // TextBlock.text is bound to Node.data.key
      //     new go.Binding('text', 'key')
      //   )
      // );

      // // but use the default Link template, by not setting Diagram.linkTemplate

      // // create the model data that will be represented by Nodes and Links
      // myDiagram.model = new go.GraphLinksModel(
      //   [
      //     { key: 'Alpha', color: 'lightblue' },
      //     { key: 'Beta', color: 'orange' },
      //     { key: 'Gamma', color: 'lightgreen' },
      //     { key: 'Delta', color: 'pink' }
      //   ],
      //   [
      //     { from: 'Alpha', to: 'Beta' },
      //     { from: 'Alpha', to: 'Gamma' },
      //     { from: 'Beta', to: 'Beta' },
      //     { from: 'Gamma', to: 'Delta' },
      //     { from: 'Delta', to: 'Alpha' }
      //   ]
      // );
    },
    initecharts() {
      this.$initecharts(document.getElementById('echarts'), this.option);
    }
  }
};
</script>

<style lang="scss" scoped>
#echarts {
  height: 50vh;
  width: 50vh;
}
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
