#include <iostream>

int funcao(int x[], int n){
  int resultado = 0;
  if (n>=0){
    resultado = funcao( x, n-1);
    if(x[n] ==100) return resultado;
    else return resultado = resultado + x[n]; 
  }
  else return resultado;
}
/// @brief 
void main(){
  int numeros[5], resultado =0;
  numeros [0] = 10;
  numeros [1] = 30;
  numeros [2] = 100;
  numeros [3] = 5;
  numeros [4] = 50;
  resultado = funcao(numeros, 5);
  printf("\n Resultado = %d", resultado);
  return 0;
}