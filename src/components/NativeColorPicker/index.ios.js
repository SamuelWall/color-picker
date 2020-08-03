
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { BitMapColorPicker as ColorPicker } from 'react-native-bitmap-color-picker';

class NativeColorPicker extends Component{
  constructor(props) {
       super(props);
       this.state = { oldColor: "#f77100" };
   }

   componentDidMount() {
       setTimeout(() => this.colorPicker && this.colorPicker.setOldColor('#fde200'), 1000);
   }

   changeColor = (colorRgb, resType) => {
     if(resType === 'end'){
       this.setState({oldColor: colorRgb})
     }
     const {colorAction} = this.props;
     if(colorAction) colorAction(colorRgb)
     console.log(colorRgb)
   }

   render() {
       return (
           <View style={{flex: 1, alignItems: 'center'}}>
               <ColorPicker
                   ref={view => {this.colorPicker = view;}}
                   oldColor={this.state.oldColor}
                   onColorChange={this.changeColor}
                   style={{width: this.props._width, height: this.props._width}}
                   isMobile={ "i" }
                   />
           </View>
       );
   }
};
const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default NativeColorPicker
