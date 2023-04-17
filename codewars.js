// Policz liczbę dzielników dodatniej liczby całkowitej n.

// Losowe testy sięgają n = 500000.

// Przykłady (wejście -> wyjście)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Zauważ, że powinieneś zwrócić tylko liczbę, liczbę dzielników. Liczby w nawiasach są pokazane tylko po to, aby zobaczyć, które liczby są liczone w każdym przypadku.



function getDivisorsCnt(n){
  let divisible = 0
  for( let i = 1; i <= n; i++) {
    if(n % i === 0) {
      divisible ++
    }
  } return divisible
}