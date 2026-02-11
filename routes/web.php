<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Root
|--------------------------------------------------------------------------

*/

Route::redirect('/', '/login');


/*
|--------------------------------------------------------------------------
| Dashboard (protegido)
|--------------------------------------------------------------------------
*/
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



/*




|--------------------------------------------------------------------------
| Perfil (protegido)
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


/*
|--------------------------------------------------------------------------
| Auth routes (login/register/logout)
|--------------------------------------------------------------------------
*/
require __DIR__ . '/auth.php';
