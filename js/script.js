function setImgName ($this) {
    var src = $this.attr('src'), fn = src.substring(src.lastIndexOf('/')+1);
    $('<span>', {class: 'filenames'}).text(fn).insertAfter($this);
}

function setCaption($selectedImg, $cap, obj) {
    if (!obj) {
        $cap.text($selectedImg.attr('alt'));
    }else{
       $cap.text($(obj).attr('alt'));
    }
}