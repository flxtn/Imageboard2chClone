<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Desk;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Desk::create([
            'tag' => 'b',
            'name' => 'Бред'
        ]);

        Desk::create([
            'tag' => 'soc',
            'name' => 'Социум'
        ]);

        Desk::create([
            'tag' => 'zog',
            'name' => 'Теории заговора'
        ]);

        Desk::create([
            'tag' => 'fag',
            'name' => 'Фагготория'
        ]);

        Desk::create([
            'tag' => 'sex',
            'name' => 'Секс'
        ]);
        Desk::create([
            'tag' => 'pol',
            'name' => 'Политика'
        ]);
        Desk::create([
            'tag' => 'mov',
            'name' => 'Фильмы'
        ]);
        Desk::create([
            'tag' => 'mp4',
            'name' => 'Музыка'
        ]);
        Desk::create([
            'tag' => 'tt',
            'name' => 'Tik-Tok'
        ]);
        Desk::create([
            'tag' => 'fg',
            'name' => 'Трапы'
        ]);
        Desk::create([
            'tag' => 'fet',
            'name' => 'Фетиши'
        ]);
        Desk::create([
            'tag' => 'feet',
            'name' => 'Ножки'
        ]);
        Desk::create([
            'tag' => 'it',
            'name' => 'Программирование'
        ]);

    }
}
