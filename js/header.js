(()=>{
  ajax({
  type:"get",
  url:"header.html"
}).then(html=>{
  document.querySelector("header")
    .innerHTML=html;
});

})();