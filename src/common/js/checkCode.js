import { update } from './update';
export function checkCode(check,status) {
  var dir = ' ';
  var kCode = {
    UP: 38,
    LEFT: 37,
    DOWN: 40,  
    RIGHT: 39,
    W: 87,
    A: 65,
    S: 83,
    D: 68
  };
  if (check[kCode.UP]) {
    dir = 'up';
  } 
  if (check[kCode.LEFT]) {
    dir = 'left';
  }
  if (check[kCode.DOWN]) {
    dir = 'down';
  } 
  if (check[kCode.RIGHT]) {
    dir = 'right';
  } 
  if (check[kCode.W]) {
    console.log('W');
  } 
  if (check[kCode.A]) {
    console.log('A');
  } 
  if (check[kCode.S]) {
    console.log('S');
  } 
  if (check[kCode.D]) {
    console.log('D');
  }
  update(dir,status);
}