<?php

namespace Database\Seeders;

use App\Models\Post;

use Illuminate\Database\Seeder;

class MySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'content' => '
            Мне скоро 24 и я девственник. Пиздец, думал все само-собой произойдет, не спешил с этим, в итоге я, походу, тоже инцел. Принимайте пополнение в свои ряды братцы.',
            'pictures' => null,
            "thread_id" => 3
        ]);
        Post::create([
            'content' => '
            ГНИЛЬ ЕБУЧАЯ СДОХНИ',
            'pictures' => null,
            "thread_id" => 3
        ]);
        Post::create([
            'content' => '
            ЕБАЛ ПИЗДА ТВОЮ ШАЛАВА',
            'pictures' => null,
            "thread_id" => 3
        ]);
        Post::create([
            'content' => '
            Ричик няшный. Лайк',
            'pictures' => null,
            "thread_id" => 3
        ]);


    }
}
