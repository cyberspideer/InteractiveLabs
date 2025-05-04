int add(int a, int b)
{
return a+b
}
void setup() {
  // put your setup code here, to run once:
Serial.begin(4800);
int result = add(5,7);
Serial.print("result of addition is");
Serial.println(result);
}

void loop() {
  // put your main code here, to run repeatedly:

}
