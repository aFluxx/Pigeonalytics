<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>@yield('title')</title>

    @stack('css-before-main')
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @stack('css-after-main')

</head>

<body style="font-family: 'Roboto';">

    <div id="app">
        @include('includes/nav')
        <div class="tw-container tw-mx-auto tw-py-4">
            @yield('content')
        </div>
    </div> <!-- #app -->

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
