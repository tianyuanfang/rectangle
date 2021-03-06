$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;
  
  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }

    if(e.key=='.'){
      if(e.target.value=='')  e.preventDefault();
      if(e.target.value.indexOf('.')!=-1){
        e.preventDefault();
      } else{
        if(e.target.selectionStart==0) e.preventDefault();
      }
    }
  });

  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }

    if(e.key=='.'){
      if(e.target.value=='')  e.preventDefault();
      if(e.target.value.indexOf('.')!=-1){
        e.preventDefault();
      } else{
        if(e.target.selectionStart==0) e.preventDefault();
      }
    }
  });
  
  $width.focusout(function() {
    var result = validate($width.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $widthValidate.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidate.html('');
    }
  });

  $height.focusout(function() {
    var result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });
  
  $btnCal.click(function(){
    if(!isPassValidate) return;

    var w = $width.val(),
        h = $height.val();

    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
