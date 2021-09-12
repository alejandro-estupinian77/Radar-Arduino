//Definir el pin de buzzer
const int buzzer = 2; //Pin Buzzer (Digital 2)

void setup() {
  pinMode(buzzer, OUTPUT); //Se define el buzzer como OUTPUT

}

void loop() {
  tone(buzzer, 300, 500); //Tono del buzzer (300 frecuencia, duración 500)
  delay(2000); //Espera 2 segundos
  noTone(buzzer); //Se para el tono
}
