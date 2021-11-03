export const getResultGame = (playerSelect, computerSeclection) => {
  let times = 0,
    score = 0;
  switch (playerSelect) {
    case 'rock':
      switch (computerSeclection) {
        case 'scissor':
          times = times + 1;
          score = score + 1;
          break;
        case 'paper':
          times = times - 1;
          break;
        default:
          break;
      }
      break;
    case 'paper':
      switch (computerSeclection) {
        case 'rock':
          times = times + 1;
          score = score + 1;
          break;
        case 'scissor':
          times = times - 1;
          break;
        default:
          break;
      }
      break;
    default:
      switch (computerSeclection) {
        case 'paper':
          times = times + 1;
          score = score + 1;
          break;
        case 'rock':
          times = times - 1;
          break;
        default:
          break;
      }
      break;
  }
  return {times, score};
};
