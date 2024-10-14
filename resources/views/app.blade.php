<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Développeur web junior, récemment diplômé et passionné, spécialisé en création de sites modernes et réactifs. Motivé à relever de nouveaux défis et à mettre mes compétences en HTML, CSS, JavaScript et plus encore au service de projets innovants.">
        <meta name="keywords" content="développeur web junior, développeur front-end, développeur back-end, HTML, CSS, JavaScript, PHP, création de sites web, responsive design, web junior, développement web, développeur débutant, portfolio web, site moderne, développeur freelance, développeur passionné, projets web, développeur laravel, développeur symfony, développeur web alsace, développeur web grand-est">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/shield.svg">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
