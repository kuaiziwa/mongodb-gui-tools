<template>
  <h3>Feature Groups</h3>
  <ul>
    <li v-for="group in groups" :key="group"><a :href="'#' + group.id">{{ group.name }}</a></li>
  </ul>


  <table class="table table-striped table-sm">
    <template v-for="group in groups" :key="group">

      <thead class="thead-light">
        <tr class="feature-group">
          <th colspan=6 width="100%" class="feature-group">
            <h2 :id="group.id">
              {{ group.name }}
            </h2>
          </th>
        </tr>
        <tr>
          <th scope="col" width="30%">
            <label class="label">
              <input type="checkbox" name="checkbox" v-model="showOnlyDifferences"> Differences only
            </label>
          </th>

          <th v-for="col in columns" :key="col" v-html="col"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in group.rows" :key="row">
          <tr valign="top" class="matrix-row" v-show="showThisRow(row)">
            <th scope="row">
              <span data-toggle="tooltip"
                :class="{ tippy_content_interactive: row.interactive, tippy_content_no_interactive: !row.interactive }"
                :data-tippy-content="row.title" v-html="row.name"></span>
            </th>

            <td v-for="cell in row.cells" :key="cell"
              :class="{ tippy_content_interactive: cell.interactive, tippy_content_no_interactive: !cell.interactive, fm_yes: cell.yes, fm_no: !cell.yes, value_is_string: cell.valueIsString }"
              :data-tippy-content="cell.title" v-html="cell.html"></td>
          </tr>
        </template>
      </tbody>
    </template>
  </table>
</template>

<script setup>
import matrixData from "./data.js";
import MarkdownIt from "markdown-it";
import MarkdownItMark from "markdown-it-mark";
// import MarkdownItAnchor from "markdown-it-anchor";
// import MarkdownItContainer from "markdown-it-container";
// import MarkdownItEmoji from "markdown-it-emoji";
// import MarkdownItHighlight from "markdown-it-highlightjs";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling


import { isString, isObject, snakeCase } from "lodash";
import { reactive, computed, onMounted, ref } from 'vue';

const md = new MarkdownIt()
  .use(MarkdownItMark)
  // /.use(MarkdownItAnchor)
  // .use(MarkdownItContainer)
  // .use(MarkdownItEmoji)
  // .use(MarkdownItHighlight);


const showOnlyDifferences = ref(false);

let sortedProducts = [...matrixData.products].sort((a, b) => a.name.localeCompare(b.name));

let productSortedPositions = sortedProducts.reduce((rst, current) => {
  rst.push(matrixData.products.indexOf(current));
  return rst;
}, []);

const columns = sortedProducts.map(it => `<a href="${it.site}" target="_blank">${it.name} </a>`);

function allAreEqual(array) {
  const result = array.every(element => {
    if (element === array[0]) {
      return true;
    }
  });

  return result;
}

function showThisRow(row) {
  if (!showOnlyDifferences?.value) return true;

  return row.isDiff;
}

const groups = matrixData.groups.reduce((rst, group) => {
  group.rows = group.rows.map((cells) => {
    if (!cells) {
      return rst;
    }


    function getCellHtml(cell) {
      if (cell?.name) return cell.name;

      if (isString(cell)) return cell;

      if (cell === true) return "Yes";
      if (cell === false) return "No";

      if (cell?.supported === false) return "No";

      return !!cell ? "Yes" : "No";
    }

    const name = (() => {
      let n = cells[0];
      if (isObject(n)) {
        n = n.name;
      }

      return n;
    })();



    const title = (() => {
      let t = cells[0]?.title;
      return isString(t) ? md.render(t) : t;
    })();

    let mappedCells = cells.slice(1).map(it => {
      let cellTitle = it?.title ? md.render(it.title) : undefined;

      return {
        valueIsString: isString(it),
        yes: !(!it || (it?.supported === false)),
        html: getCellHtml(it),
        title: cellTitle,
        interactive: it?.interactive
      }
    });


    let sortedCells = productSortedPositions.reduce((prev, c) => {
      prev.push(mappedCells[c]);

      return prev;
    }, [])

    let row = {
      name,
      title,
      interactive: cells[0]?.interactive,
      cells: sortedCells,
    };
    row.isDiff = !allAreEqual(row.cells.map(it => it.valueIsString ? it : it.yes));

    return row;
  });

  rst.push(group);
  return rst;
}, []).map(group => {
  return {
    id: snakeCase(group.name),
    ...group,
  }
});


onMounted(() => {
  tippy('[data-tippy-content].tippy_content_no_interactive', {
    allowHTML: true,
    //sticky: true,
    interactive: false,
  });

  tippy('[data-tippy-content].tippy_content_interactive', {
    allowHTML: true,

    interactive: true
  });

  tippy('[data-tippy-content].tippy_content_img', {
    allowHTML: true,
    // touchHold: true,
    // sticky:true,
    hideOnClick: true,
    interactive: true,
    // placement: 'left',
    // distance: 20,
    // arrow: true,
    // animateFill: false,
    animation: 'shift-away',
    maxWidth: 750
  })
})

</script>

<style scoped>
/* button {
  background-color: #4CAF50;
} */

#matrixContent h2:after {
  background-color: #e7eae8;
  content: '\a0';
  flex-grow: 1;
  height: 2px;
  position: relative;
  margin: .5em 0 .5em .75em;
}

#matrixContent h2 {
  display: flex;
  flex-direction: row;
  border-bottom: none;
}

.table {
  text-align: left;
}

.table td,
.table th {
  padding: 0.5rem;
}

b,
strong,
th {
  font-weight: 500;
  color: #474747 !important;
}


td.fm_no {
  background-color: #ffdddd !important;
}

td.fm_yes {
  background-color: #ddffdd !important;
}

td.fm_obs {
  background-color: #ddddff !important;
}

td.fm_unk {
  background-color: #ffffaa !important;
}

tr.feature-group {
  border: none;
}

th.feature-group {
  border: none;
}

.table label {
  font-size: xx-small;
}

td.value_is_string {
  background-color: initial !important;
}

[data-tippy-content]::after {
  content: " ▪️";
  /* height: 2px; */
}


input[type="checkbox"] {
  vertical-align: text-top
}
</style>
