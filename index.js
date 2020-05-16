import { DxTextBox } from "devextreme-vue/ui/text-box";
import { DxButton } from "devextreme-vue/ui/button"
import { DxValidator, DxValidationRule } from "devextreme-vue/validator";
import { DxList, DxItemDragging } from 'devextreme-vue/list'


Vue.component('dx-button', DxButton);
Vue.component('dx-list', DxList);
Vue.component('dx-item-dragging', DxItemDragging)

Vue.component('dx-text-box', DxTextBox);
Vue.component('dx-validator', DxValidator);
Vue.component('dx-validation-rule', DxValidationRule);
