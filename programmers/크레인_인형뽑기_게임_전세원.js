function solution(board, moves) {
  let answer = 0; //사라진 인형 수
  const pickedToy = []; // stack 구조로 인형 넣기

  moves.forEach((move) => {
    //move는 각 x축 값.
    for (let line of board) {
      if (line[move - 1] !== 0) {
        if (pickedToy.length > 0 && pickedToy.at(-1) === line[move - 1]) {
          answer++;
          pickedToy.pop();
        } else {
          pickedToy.push(line[move - 1]);
        }

        line[move - 1] = 0;

        break;
      }
    }
  });

  return answer * 2;
}
