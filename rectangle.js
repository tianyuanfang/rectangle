$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btn.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());
    var p=2*(w+h),
        a=w*h;
    $perimeter.val(p);
    $area.val(a);
  })
});
