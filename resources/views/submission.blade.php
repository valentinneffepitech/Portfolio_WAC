<!DOCTYPE html>
<html>

<head>
    <title>Laravel Mail</title>
</head>

<body style="background-color: #1d1d1d; color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
    <h1 style="text-align: center;">
        Nouvelle demande de contact
    </h1>
    <div style="width: 80%; margin: 2rem auto;">
        <p style="color:#f6f6f6">{{ $data['name'] }} vous a contacté</p>
        <p style="color:#f6f6f6">Vous pouvez la joindre : <a href="mailto:{{ $data['email'] }}" title="Ecrire à {{ $data['name'] }}" style="color: #ec3434; text-decoration: none;">{{ $data['email'] }}</a></p>
        <p style="color:#f6f6f6">
            Cette personne vous a écrit :
        </p>
        <p style="border: 2px solid #f6f6f6; padding: 1rem 1.5rem; line-height: 1.5rem;">
            {{ $data['message'] }}
        </p>
    </div>
</body>

</html>