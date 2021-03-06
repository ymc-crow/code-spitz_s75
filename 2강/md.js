
const parseMD = (v) => {  
  const d64 =v=>decodeURIComponent(atob(v).split('').map(c=>'%' + ('00' +c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  
  return d64(v).split('\n').map(
    v=>{
      let i = 3;
      while(i--){
        if(v.startsWith('#'.repeat(i + 1))) return `<h${i + 1}>${v.substr(i + 1)}</h${i + 1}>`;
      }
      return v;
    }).join('<br>');
}

const md = (v, el) => {
  console.log(v);
  el.innerHTML = parseMD(v);
}