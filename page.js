var params = new URL(document.location).searchParams;
var keys = {
    open: params.get("open")
}

console.log(typeof(keys.open))

if (keys.open != null){
    window.open("").document.write("<!DOCTYPE html><html id=\"changeElement\"><head><meta charset=\"UTF-8\"></head> <body><script> ((x)=>{ x.onreadystatechange=()=>{ x.readyState==4 && x.status==200 && (window.open(\"\").document.write(x.responseText)); }; x.open(\"GET\", \""+keys.open+"\", true); x.send(); })(new XMLHttpRequest());</script> </body></html>")
}