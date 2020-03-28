import React, { useState, useEffect, useMemo } from 'react'
import QRCode from 'react-qr-code'
import { encodeJWT, decodeJWT } from '../utils/jwt'

const COLORS = {
  green: '#27C269',
  yellow: '#E5DB5C',
  orange: '#E18518',
  red: '#EC3131',
  DEFAULT: '#B4B5C1',
}

/*
  issues: slow render qrcode
*/
export const CovidQRCode = ({
  data,
  bgColor,
  size
}: {
  data: QRData
  bgColor?: string
  size?: number
}) => {
  const [encoded, setEncoded] = useState(null)
  useEffect(() => {
    encodeJWT(data).then(encoded => {
      setEncoded(encoded)
      // console.log('decodeJWT', decodeJWT(encoded))
    })
  }, [])
  if (!encoded) {
    return null
  }
  return (
    <QRCode value={encoded} fgColor={COLORS[data.color]} bgColor={bgColor} size={size} />
  )
}
