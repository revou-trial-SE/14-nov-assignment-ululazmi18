// Array untuk menyimpan daftar film
let movies = [];

// Fungsi untuk menampilkan daftar film di halaman
function displayMovies() {
  const movieListContainer = document.getElementById('movieList');
  movieListContainer.innerHTML = ''; // Membersihkan konten sebelum menampilkan ulang

  movies.forEach((movie) => {
    const newMovieCard = createMovieCard(movie);
    movieListContainer.appendChild(newMovieCard);
  });
}

// Fungsi untuk menambahkan film baru ke dalam daftar
function addMovie(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Mendapatkan nilai dari input
  const titleInput = document.getElementById('movieTitle').value;
  const synopsisInput = document.getElementById('movieSynopsis').value;

  // Membuat objek film baru
  const newMovie = {
    title: titleInput,
    synopsis: synopsisInput
  };

  movies.push(newMovie); // Menambahkan film baru ke dalam daftar

  displayMovies(); // Menampilkan ulang daftar film setelah menambahkan film baru

  // Mengosongkan nilai input setelah menambahkan film
  document.getElementById('movieTitle').value = '';
  document.getElementById('movieSynopsis').value = '';

  // Menutup modal setelah menambahkan film
  $('#addMovieModal').modal('hide');
}

// Menambahkan event listener ke form untuk menangani penambahan film
const addMovieForm = document.getElementById('addMovieForm');
addMovieForm.addEventListener('submit', addMovie);

// Memanggil fungsi displayMovies untuk menampilkan daftar film saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayMovies);
