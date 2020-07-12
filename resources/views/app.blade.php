<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>@yield('title')</title>

    @stack('css-before-main')
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
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
            @include('includes/nav')
            <div class="tw-container tw-mx-auto tw-py-4">
                @yield('content')
            </div>
        </v-app>
    </div> <!-- #app -->
    @auth
    @endauth

    <div id="scripts">
        @stack('scripts-before-main')
        <script src="{{ asset('js/manifest.js') }}"></script>
        <script src="{{ asset('js/vendor.js') }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
        @stack('scripts-after-main')
        @yield('footer')
    </div> <!-- #scripts -->

</body>

</html>
