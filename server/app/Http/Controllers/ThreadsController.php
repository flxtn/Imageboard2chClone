<?php

namespace App\Http\Controllers;

use App\Models\Desk;
use App\Models\Thread;


class ThreadsController extends Controller
{
    public function index($desk){
        $currendDesk = Desk::where('tag', $desk)->first(); 
        if($currendDesk) {
            $threads = Thread::with('posts')->where('desk_id', $currendDesk->id)->latest()->get();


            $responseData = [];
            foreach ($threads as $thread) {
                foreach ($thread->posts as $post) {
                    $post->pictures = json_decode($post->pictures);
                }
                $postCount = $thread->posts->count();
                if ($postCount > 4) {
                    $selectedPosts = collect([$thread->posts->first()])
                                        ->concat($thread->posts->slice(-3)->values());
                } else {
                    $selectedPosts = $thread->posts;
                }
                $responseData[] = [
                    'id' => $thread->id,
                    'created_at' => $thread->created_at,
                    'updated_at' => $thread->updated_at,
                    'desk_id' => $thread->desk_id,
                    'posts_count' => $thread->posts_count,
                    'pictures_count' => $thread->pictures_count,
                    'posts' => $selectedPosts,
                ];
            }


            return response(['threads' => $responseData]);
        } else {
            return response()->json(['error' => 'Desk not found'], 404);
        }
    }


    public function getThread($id){
        $currentThread = Thread::with('posts')->where('id', $id)->first();
        foreach($currentThread->posts as $post) {
            $post->pictures = json_decode($post->pictures);
        }
        return response(['thread' => $currentThread], 200);
    }

}
