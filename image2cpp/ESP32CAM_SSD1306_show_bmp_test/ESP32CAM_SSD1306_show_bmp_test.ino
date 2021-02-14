#include <Wire.h>              
#include "SSD1306.h"       

// Include custom images
#include "images.h"

#define image_width 128
#define image_height 64

// SDA 1-TX , SCL 3-RX
SSD1306 display(0x3c, 1, 3);   // ADDRESS, SDA, SCL 

void setup() {
  Serial.begin(115200);
  Serial.println();

  // Initialising the UI will init the display too.
  display.init();

  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10); 
   
  display.clear();  
  display.drawXbm(0, 0,  image_width, image_height, image_bmp);
  display.display();
}
  
void loop() { 
}
