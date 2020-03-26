import React from 'react'
import { MockScreen } from '../MockScreen'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../styles'
import { Title, Subtitle, Header } from '../../components/Base'
import { SafeAreaView } from 'react-native-safe-area-context'

export const QRCodeScan = () => {
  return (
    <SafeAreaView style={styles.background}>
      <QRCodeScanner
        showMarker
        onRead={(e) => {
          console.log('data', e, e.data)
        }}
        reactivate
        reactivateTimeout={3} //Use this to configure how long it should take before the QRCodeScanner should reactivate.
        containerStyle={styles.background}
        topContent={
          <Header>
            <Title>แสกน QR</Title>
            <Subtitle>เพื่อตรวจสอบความเสี่ยง</Subtitle>
          </Header>
        } 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_DARK
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
})
