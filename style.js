let hadir = 20;
  let izin = 10;
  let alfa = 30;
  let total = hadir + izin + alfa;

  let hadirPersen = Math.round((hadir / total) * 100);
  let izinPersen = Math.round((izin / total) * 100);
  let alfaPersen = Math.round((alfa / total) * 100);

  document.getElementById("hadirBar").style.width = hadirPersen + "%";
  document.getElementById("izinBar").style.width = izinPersen + "%";
  document.getElementById("alfaBar").style.width = alfaPersen + "%";

  document.getElementById("hadirBar").innerText = "Hadir " + hadirPersen + "%";
  document.getElementById("izinBar").innerText = "Izin " + izinPersen + "%";
  document.getElementById("alfaBar").innerText = "Alfa " + alfaPersen + "%";