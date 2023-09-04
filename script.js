function generateQR() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var company = document.getElementById("company").value;

  var vcard = "BEGIN:VCARD\n";
  vcard += "VERSION:3.0\n";
  vcard += "N:" + name + ";;;;\n";
  vcard += "FN:" + name + "\n";
  vcard += "ORG:" + company + "\n";
  vcard += "TEL;TYPE=work,voice;VALUE=uri:tel:" + phone + "\n";
  vcard += "EMAIL:" + email + "\n";
  vcard += "ADR;TYPE=WORK,PREF:;;" + address + "\n";
  vcard += "END:VCARD";

  var qr = new QRious({
    element: document.getElementById("qrcode"),
    size: 300,
    value: vcard
  });

  var downloadLink = document.getElementById("download");
  downloadLink.href = qr.toDataURL("image/png");
  downloadLink.style.display = "block";
}
