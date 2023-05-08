<?php

namespace App\Http\Controllers\V1\User;

//use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Login extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    public function captcha(Request $request)
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        //  $request->getContent();
        //  return response()->json(['res' => $_POST['id'], 're2' => $request]);
        $cap_dir  = public_path() . '/images';
        $files   =  scandir($cap_dir);
        $valid_image_files = array_diff($files, ['.', '..']);
        $count  = 0;
        foreach ($valid_image_files as $image_to_remove) {
            if (file_exists($cap_dir . '/' . $image_to_remove)) {
                unlink($cap_dir . '/' . $image_to_remove);
            }
        }


        if (function_exists('gd_info')) {
            // echo "GD library is installed on this server";
        } else {
            echo "GD library is not installed on this server";

            exit();
        }

        $w  = 240;
        $h  = 80;
        $image  = \imagecreatetruecolor($w, $h);
        // fill the background color
        //$bg = imagecolorallocate($image, 194, 120, 100);

        // choose a color for the ellipse
        //  $color = imagecolorallocate($image, rand(120, 225), rand(120, 225), rand(120, 225));
        $color = \imagecolorallocate($image, 0, 0, 0);
        $textcolor = \imagecolorallocate($image, rand(120, 225), rand(120, 225), rand(120, 225));
        //$textcolor = imagecolorallocate($image, 0, 0, 0);
        \imagefill($image, 0, 0, $color);
        $fonts = [
            public_path() . '\fonts\Mukta\Mukta-Bold.ttf',
            public_path() . '\fonts\Mukta\Mukta-Light.ttf',
            public_path() . '\fonts\Mukta\Mukta-medium.ttf',
            // ,  dirname(__FILE__) . '\fonts\Merriweather.ttf', dirname(__FILE__) . '\fonts\PlayfairDisplay.ttf'
        ];
        $string_length = 6;
        $permitted_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

        $captcha_string = substr(str_shuffle($permitted_chars), 0, $string_length);

        // imagettftext($image, 20, rand(-15, 15), 0, rand(20, 40), 199, $fonts[array_rand($fonts)], $captcha_string);
        // imagettftext($image, 20, rand(-15, 15), 0, rand(20, 40), 199, $fonts[array_rand($fonts)], $captcha_string);


        $str_gen  = [];

        for ($i = 0; $i < $string_length; $i++) {
            // $letter_space = 170 / $string_length;
            // $initial = 15;
            $textcolor = \imagecolorallocate($image, rand(120, 225), rand(120, 225), rand(120, 225));

            \imagettftext(
                $image,
                20,
                \rand(-15, 15),
                ($i) / $string_length * $w, //proportion of with taken by each letter
                \rand(20, 40),
                $textcolor,
                $fonts[\array_rand($fonts)],
                $captcha_string[$i]
            );
            $str_gen = [...$str_gen, $captcha_string[$i]];
            // imagettftext($image, 20, rand(-15, 15), $initial + $i * $letter_space, rand(20, 40), $colors[rand(0, 1)], $fonts[array_rand($fonts)], $captcha_string[$i]);
            $skew_image  = \imagecreatetruecolor($w, $h);
            \imagefill($skew_image, 0, 0, $color);
            for ($x = 0; $x < $w; $x++) {
                for ($y = 0; $y < $h; $y++) {
                    //  imageline($image, $w / 2, $h / 2, $x * 0.2, $y * 0.2,  $textcolor);  # draw line to the image
                    $pixel          = \imagecolorat($image, $x, $y); ///get each piexel
                    $col_pixex_arr  = \imagecolorsforindex($image, $pixel);
                    $image_col_bg   = \imagecolorallocate($skew_image, $col_pixex_arr['red'], $col_pixex_arr['green'], $col_pixex_arr['blue']);
                    $pix_loc_x = $x;
                    $wave_freq  = 10;
                    $pix_loc_y = 10 * sin($x / $wave_freq) + $y;
                    \imagesetpixel($skew_image, $pix_loc_x, $pix_loc_y, $image_col_bg);
                }
            }
        }

        $data  = [];

        \header("Content-type: image/png");

        $img_path  = '\images\capchas_' . \rand(1, 99999) . '_.png'; ///path to put the image

        \imagepng($skew_image, public_path() .  $img_path);
        // $ata[] = utf8_encode(\imagepng($image)); CALL THIS TO PUT THE IMAGE ON THE FILE
        // $data[]  = "<img src= '" + \imagepng($image) + "'/>";

        imagedestroy($image);
        imagedestroy($skew_image);
        // Via a request instance...
        // $request->session()->put($request->input('id'), $str_gen);

        // Via the global "session" helper...

        return response()->json([
            'captcha' =>  $img_path,
            'session' => $str_gen,

            // $request->all(), public_path(), base_path()
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
