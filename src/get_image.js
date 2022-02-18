let image_Url = undefined;
$input_img = document.getElementById("before_img_input");


$input_img.addEventListener('change', (e)=>{
  document.getElementById("before_img_preview").classList.remove("non-visi");

  img_file = e.target.files[0];
  reader = new FileReader();
  reader.onload = (e) => {
    imageUrl = e.target.result;
    document.getElementById("before_img").src = imageUrl;

    // ファイル幅取得、表示
    img_element = new Image();
    img_element.onload = ()=>{
      width = img_element.naturalWidth ;
      height = img_element.naturalHeight ;
      document.getElementById("before_img_wh").innerText = `width:${width}px, height:${height}px`
    }
    img_element.src = imageUrl;
    image_Url = imageUrl;
  }
  reader.readAsDataURL(img_file);
});