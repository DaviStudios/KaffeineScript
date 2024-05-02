function showD() {
 if (document.getElementById('download').style.display == 'none') {
  if (document.getElementById('docs').style.display == 'none') {
   document.getElementById('docs').style.display = 'block';
  } else {
   document.getElementById('docs').style.display = 'none';
  }
 }
}

function showDW() {
 if (document.getElementById('docs').style.display == 'none') {
  if (document.getElementById('download').style.display == 'none') {
   document.getElementById('download').style.display = 'block';
  } else {
   document.getElementById('download').style.display = 'none';
  }
 }
}

function downloadKS() {
 const tdw = document.createElement('a');
 tdw.href = 'ks.zip';
 tdw.download = 'ks.zip';
 document.body.appendChild(tdw);
 tdw.textContent = 'if it didn\'t download, click here';
 tdw.style.cursor = 'pointer';
 tdw.click();
 setTimeout(function() {
  document.body.removeChild(tdw);
 }, 3000);
}