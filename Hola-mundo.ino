//Definir variables
String variable = "Hola Mundo";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); //Conexión Serial entre computadora y placa Arduino Nano

}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(variable); //Imprimir "Hola Mundo" en Monitor en Serie
}
