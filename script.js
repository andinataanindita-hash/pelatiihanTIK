// 1. Memilih tombol interaktif berdasarkan ID yang ada di HTML ('sapaButton')
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan 'event listener' untuk mendeteksi saat tombol diklik oleh pengguna
tombolSapa.addEventListener('click', function() {
  // 3. Menampilkan jendela pop-up (alert) ketika tombol berhasil diklik
  alert('Halo! Terima kasih sudah berkunjung!');
});
