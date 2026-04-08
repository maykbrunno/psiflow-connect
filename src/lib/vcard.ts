export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Wagner Barros - Psicólogo
TEL;TYPE=CELL:+5586998252016
EMAIL:wagnersp2014@hotmail.com
URL:https://instagram.com/wagnerbarrospsi
NOTE:Psicólogo - CRP XX/XXXXX
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wagner-barros-psicologo.vcf';
  a.click();
  URL.revokeObjectURL(url);
}
