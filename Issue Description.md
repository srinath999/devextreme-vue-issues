# Hiding grid using v-if causes errors in console

removing the datagrid with [column](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) definitions using `v-if` directive it gives different errors in different browser clients (checked in [firefox](https://github.com/srinath999/devextreme-vue-issues/blob/grid-hide-issue/pics/firefox.png) and [chrome](https://github.com/srinath999/devextreme-vue-issues/blob/grid-hide-issue/pics/chrome.png)).

## Benefits of solution:

1. Gives us ability to hide grids easily without writing additional code from your api before hiding it or do a `v-show` which can impact performance.