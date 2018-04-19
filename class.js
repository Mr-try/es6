function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);
  
  console.log(Point.prototype)
  /**
   * {
   * toString:f()
   * constructor: f Point(x,y)
   * __proto__: Object
   * }
   */
  console.log(p)
  /**
   * Point{
   *    x:2
   *    y:3
   *    __proto__:{
   *        toString: f()
   *        contructor: f Point(x,y)
   *        __proto__ :Object
   *    }
   * }
   */

Object.create = function(o){
    function f(){}
    f.prototype = o
    return new f()
}