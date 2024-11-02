document.getElementById('logoutButton').addEventListener('click', function() {
    // Logika untuk mengakhiri sesi pengguna
    // Misalnya, menghapus token dari localStorage atau sessionStorage
    localStorage.removeItem('userToken'); // Contoh jika Anda menyimpan token di localStorage

    // Mengarahkan pengguna kembali ke halaman login
    window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
});