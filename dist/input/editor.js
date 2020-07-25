import {
  NativeColorPicker
} from '../../index.js'

export const components = {
  NativeColorPicker
}

export const config = {"displayName":"Native Color Picker","name":"native-color-picker","version":"dev","components":[{"name":"NativeColorPicker","displayName":"Native Color Picker","defaultWidth":200,"defaultHeight":200,"props":[{"name":"size","displayName":"Size","type":"number","default":200,"control":{"type":"slider","min":50,"max":300}},{"name":"colorAction","displayName":"Action on Choose Color","type":"action","arguments":[{"type":"text","displayName":"Color Value"}]}]}]}