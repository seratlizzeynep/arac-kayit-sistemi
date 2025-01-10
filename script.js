let aracSayaci = 1;

document.getElementById('aracKayitFormu').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const kesifTarihi = document.getElementById('kesifTarihi').value;
    const dosyaNo = document.getElementById('dosyaNo').value;
    const plaka = document.getElementById('plaka').value;
    const sasiNo = document.getElementById('sasiNo').value;
    const motorNo = document.getElementById('motorNo').value;
    const otoparkGirisTarihi = document.getElementById('otoparkGirisTarihi').value;
    
    const solOnCamEzik = document.getElementById('solOnCamEzik').checked;
    const solOnCamCizik = document.getElementById('solOnCamCizik').checked;

-    const aracDetaylari = `
        <div class="detaylar">
            <p><strong>Keşif Tarihi:</strong> ${kesifTarihi}</p>
            <p><strong>Dosya No:</strong> ${dosyaNo}</p>
            <p><strong>Plaka:</strong> ${plaka}</p>
            <p><strong>Şasi No:</strong> ${sasiNo}</p>
            <p><strong>Motor No:</strong> ${motorNo}</p>
            <p><strong>Otopark Giriş Tarihi:</strong> ${otoparkGirisTarihi}</p>
            <p><strong>Sol Ön Cam Durumu:</strong> 
                Ezik: ${solOnCamEzik ? 'Evet' : 'Hayır'}, 
                Çizik: ${solOnCamCizik ? 'Evet' : 'Hayır'}
            </p>
        </div>
    `;
    
    const aracListesi = document.getElementById('aracListesi');
    const aracItem = document.createElement('li');
    aracItem.innerHTML = `<span>Araç ${aracSayaci}</span>` + aracDetaylari;

    aracItem.querySelector('span').addEventListener('click', function() {
        const detaylar = aracItem.querySelector('.detaylar');
        if (detaylar.style.display === 'none' || !detaylar.style.display) {
            detaylar.style.display = 'block';
        } else {
            detaylar.style.display = 'none';
        }
    });

    aracItem.querySelector('.detaylar').style.display = 'none';

    aracListesi.appendChild(aracItem);
    
    aracSayaci++;
});
