import {
  NativeColorPicker
} from '../../index.js'

export const components = {
  NativeColorPicker
}

export const config = {"displayName":"Native Color Picker","logo":"./logo.png","icon":"./thumbnail.png","name":"native-color-picker","version":"dev","components":[{"name":"NativeColorPicker","displayName":"Native Color Picker","defaultWidth":200,"defaultHeight":200,"props":[{"name":"size","displayName":"Size","type":"number","default":200,"control":{"type":"slider","max":300,"min":0}},{"name":"colorAction","displayName":"Action on Choose Color","type":"action","arguments":[{"type":"text","displayName":"Color Value"}]}],"resizeY":true}]}