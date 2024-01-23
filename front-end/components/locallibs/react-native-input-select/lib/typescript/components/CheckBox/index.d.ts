/// <reference types="react" />
import type { CheckboxProps } from './types';
/**
  * Individual props `checkboxSize`, `checkboxStyle`, `checkboxLabelStyle` would be replaced in future releases
  * and replaced with a single object `checkboxComponentStyles` e.g

```js
const checkboxComponentStyles = {
  checkboxSize: 20,
  checkboxStyle: {
    backgroundColor: 'purple',
    borderRadius: 30,
    padding: 10,
    borderColor: 'red',
  },
  checkboxLabelStyle: { color: 'red', fontSize: 20 },
};
```
  */
declare const CheckBox: ({ label, value, disabled, primaryColor, checkboxSize, checkboxStyle, checkboxLabelStyle, checkboxComponentStyles, checkboxComponent, onChange, }: CheckboxProps) => JSX.Element;
export default CheckBox;
