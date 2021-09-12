//Definir variables
const int echo = 7; //Pin echo (Recibe señal ultrasónica)
const int trigger = 5; //Pin trigger (Manda señal ultrasónica)

int distancia; //Variable para la distancia detectada por el sensor
int tiempo;

void setup() {
  Serial.begin(9600); //Realizar conexiones serial
  pinMode(trigger, OUTPUT); //Definimos tigger como OUTPUT
  pinMode(echo, INPUT); //Definimos echo como INPUT
}

void loop() {
  digitalWrite(trigger, LOW); //No se manda la señal (LOW)
  delay(1000); //Espera 1 segundo
  digitalWrite(trigger, HIGH); //Se manda la señal (HIGH)
  delay(1000); //Espera 1 segundo
  digitalWrite(trigger, LOW); //No se manda la señal (LOW)

  tiempo = pulseIn(echo, HIGH); //Tiempo que tarda en recibir la señal

  distancia = tiempo / 58.2; //Se calcula la distancia dividiendo por una costante (58.2)

  Serial.print(distancia); //Se imprime la distancia con Serial.print en el monitor en serie
  Serial.println("cm");
}
