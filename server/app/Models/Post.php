<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'content',
        'pictures',
        'thread_id'

    ];
    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }
}
