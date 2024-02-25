<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;
    protected $fillable = [
        'posts_count',
        'pictures_count',
        'desk_id',
        'posts',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
