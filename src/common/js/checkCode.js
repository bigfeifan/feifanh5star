import { update } from './update';
/**
 * @param {object} check 检测对象
 */
export function checkCode(ctx) {
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
  if (ctx.check[kCode.UP]) {
    dir = 'up';
  } 
  if (ctx.check[kCode.LEFT]) {
    dir = 'left';
  }
  if (ctx.check[kCode.DOWN]) {
    dir = 'down';
  } 
  if (ctx.check[kCode.RIGHT]) {
    dir = 'right';
  } 
  if (ctx.check[kCode.W]) {
    console.log('W');
  } 
  if (ctx.check[kCode.A]) {
    console.log('A');
  } 
  if (ctx.check[kCode.S]) {
    console.log('S');
  } 
  if (ctx.check[kCode.D]) {
    console.log('D');
  }
  update(ctx,dir);
}