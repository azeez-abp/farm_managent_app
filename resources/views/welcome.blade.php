<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    @vite('resources/css/app.css')
    <!-- Styles -->
    <style>
        /* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */
        *,
        ::after,
        ::before {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb
        }

        ::after,
        ::before {
            --tw-content: ''
        }

        html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: Figtree, sans-serif;
            font-feature-settings: normal
        }

        body {
            margin: 0;
            line-height: inherit
        }
    </style>

<body>
   <div class="error"></div>
    <div class="elem-group-login">

        <div class="elem-group-login-wrapper" class="div4">
            <div class="elem-group-login-wrapper-content" class="div3">

                <div>
                    @csrf

                    <input type="text" class="input" placeholder="Enter user id" name="user">

                </div>


                <div>

                    <input type="text" class="input" placeholder="Enter password" name="password">

                </div>

                <div class="div3">
                    <div style="display:flex;flex-direction:row;height:5em" class="div1">
                        <div class="captch-box">
                            <!-- <img src="/images/capchas.png" alt="CAPTCHA" class="captcha-image"> -->

                        </div>
                        <div class="r" style="position:relative">
                            <i class="fa fa-refresh  refresh-captcha"></i>
                        </div>


                    </div>
                    <br>
                    <input type="text" id="captcha" class="input" placeholder="Enter what you see in the image" name="captcha_challenge" pattern="[A-Z]{6}">

                </div>

                <div class="submit-conatainer">

                </div>
                <div style="position: relative;">
                    <div class="demarcation">Continue with</div>
                </div>
                <div class="login-with">
                    <button type="button" class="login-button"><span class="fa fa-facebook"> </span> <i> Login</i></button>
                    <button type="button" class="login-button"><span class="fa fa-google"> </span> <i> Login</i></button>
                    <button type="button" class="login-button"><span class="fa fa-github"> </span><i> Login</i></button>
                </div>
            </div>
        </div>

    </div>
</body>

@vite('resources/js/app.js')

</html>