//Definir Variables
const int buzzer = 2; //Pin Buzzer
const int sensorEcho = 7; //Pin Echo del Sensor
const int sensorTrig = 5; //Pin Trig del Sensor

int distancia;
int tiempo;

void setup() {
  Serial.begin(9600); //Iniciar Conexión Serial
  pinMode(buzzer, OUTPUT); //Buzzer como pin de salida
  pinMode(sensorEcho, INPUT); //Echo como pin de entrada
  pinMode(sensorTrig, OUTPUT); //Trigger como pin de salida
}

void loop() {
  digitalWrite(sensorTrig, LOW); //No se manda la señal
  delay(500);
  digitalWrite(sensorTrig, HIGH); //Se manda la señal
  delay(500);
  digitalWrite(sensorTrig, LOW); //No se manda la señal

  tiempo = pulseIn(sensorEcho, HIGH); //Se calcula el tiempo que tardo la señal en regresar al sensor

  distancia = tiempo / 58.2; //Se calcula la distancia a partir del tiempo y la constante 58.2

  Serial.print(distancia); //Se imprime la distancia en el monitor en serie
  Serial.println(" cm");

  if (distancia < 50){ //Condición que se cumple si la distancia es menor a 50cm
    tone(buzzer, 1000);
    delay(5000);
    noTone(buzzer);
  } else if (distancia > 50 && distancia < 100){ //Condición que se cumple si la distancia es menor a 100cm y mayor a 50cm
    tone(buzzer, 1000);
    delay(2000);
    noTone(buzzer);
  } else if (distancia > 100 && distancia < 300){ //Condicioón que se cumple si la distancia es mayor a 100cm y menor a 300cm
    tone(buzzer, 1000);
    delay(1000);
    noTone(buzzer);
  } else{ //Condición que se cumple si no se cumple alguna de las condiciones anteriores
    tone(buzzer, 1000);
    delay(100);
    noTone(buzzer);
  }
}
