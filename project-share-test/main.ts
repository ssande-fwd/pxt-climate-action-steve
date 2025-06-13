basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.moisture1.isPastThreshold(80, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(60, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel6, 0xff0000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel5, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(40, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel4, 0xff0000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel3, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel2, 0xff0000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0000)
    }
})
