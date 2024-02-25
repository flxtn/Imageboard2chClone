<?php

namespace App\Http\Controllers;

use App\Models\Desk;
use App\Models\Post;
use App\Models\Thread;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{




    public function postThread(Request $request, $desk){
        $currendDesk = Desk::where('tag', $desk)->first(); 

        if($currendDesk) {
            $validate = $request->validate([
                'content' => ['required', 'string'],
            ]);
            if ($request->hasFile('pictures')) {
                $maxWidth = 250;
                $maxHeight = 250;

                foreach ($request->file('pictures') as $file) {
                    $fileName = $file->getClientOriginalName();
                    $path = public_path($fileName);
                    Image::make($file)->save($path);
                    $uploadedFiles[] = $fileName;
                    $thumbnailPath = public_path('thumbnails\\' . $fileName);
                    $image = Image::make($file);
                    if ($image->width() > $image->height() && $image->width() > $maxWidth) {
                        $image->resize($maxWidth, ($maxHeight*$image->height()/$image->width()));}
                    if ($image->height() > $image->width() && $image->height() > $maxHeight) {
                        $image->resize(($maxWidth*$image->width()/$image->height()), $maxHeight);
                    }
                    $image->save($thumbnailPath);
                }
    
            }else {
                return response(['message' => 'No Files'], 422);
            }

            
            $newThread = new Thread();
            $newThread->desk_id = $currendDesk->id;
            $newThread->posts_count = $newThread->posts_count + 1;
            $newThread->save();   
            $newPost = new Post();
            $newPost->content = $validate['content'];
            $newPost->pictures = json_encode($uploadedFiles);
            $newPost->thread_id = $newThread->id;
            $newPost->save();  


            return response(['message' => 'Thread created successfuly'], 200);
        } else {

            return response()->json(['error' => 'Desk not found'], 404);
        }

    }

    public function postInThread(Request $request, $desk, $thread){
        $currentDesk = Desk::where('tag', $desk)->first();
        $currentThread = Thread::where('desk_id', $currentDesk->id)->where('id', $thread)->first();
        $validate = $request->validate([
            'content' => ['required', 'string'],
        ]);
        $newPost = new Post();
        if ($request->hasFile('pictures')) {

            $maxWidth = 250;
            $maxHeight = 250;

                foreach ($request->file('pictures') as $file) {
                    $fileName = $file->getClientOriginalName();
                    $path = public_path($fileName);
                    Image::make($file)->save($path);
                    $uploadedFiles[] = $fileName;
                    $thumbnailPath = public_path('thumbnails\\' . $fileName);
                    $image = Image::make($file);
 
                    if ($image->width() > $image->height() && $image->width() > $maxWidth) {
                        $image->resize($maxWidth, ($maxHeight*$image->height()/$image->width()), function ($constraint) {
                            $constraint->aspectRatio(); 
                        });
                    }
                    if ($image->height() > $image->width() && $image->height() > $maxHeight) {
                        $image->resize(($maxWidth*$image->width()/$image->height()), $maxHeight, function ($constraint) {
                            $constraint->aspectRatio(); 
                        });
                    }
                    $image->save($thumbnailPath);
                }
            $newPost->pictures = json_encode($uploadedFiles);

        }

            $newPost->content = $validate['content'];
            $newPost->thread_id = $currentThread->id;
            $newPost->save();  
            $currentThread->posts_count += 1;
            $currentThread->save();

        return response(['message' => 'Post created successfuly'], 200);

    }
}
