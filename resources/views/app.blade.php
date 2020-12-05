<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>@yield('title') | PigeonAlytics</title>

    <link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('/img/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('/img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('/img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ URL::asset('/img/favicon/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ URL::asset('/img/favicon/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    @stack('css-before-main')
    <link rel=" stylesheet" href="{{ asset('css/app.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    @stack('css-after-main')
    @if(Auth::check())
    <script>
        var authed = 1
    </script>
    @else
    <script>
        var authed = 0
    </script>
    @endif
</head>

<body style="font-family: 'Roboto';">

    <div id="app">
        <v-app>
            <div class="tw-flex tw-h-full">

                <navigation-drawer :authed="{{ json_encode(Auth::check()) }}">
                </navigation-drawer>

                <div class="tw-w-full">
                    <pigeon-search :pigeons="{{ json_encode($navigationPigeons) }}"></pigeon-search>
                    @yield('content')
                </div>

            </div>
        </v-app>
    </div> <!-- #app -->
    @auth
    @endauth

    @routes

    <div id=" scripts">
        @stack('scripts-before-main')
        <script src="{{ asset('js/manifest.js') }}"></script>
        <script src="{{ asset('js/vendor.js') }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
        @stack('scripts-after-main')
        @yield('footer')
    </div> <!-- #scripts -->

</body>

</html>
