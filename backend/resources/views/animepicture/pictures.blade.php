<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Image</title>
</head>
<body>
    <h1>Anime Image</h1>
    @if(isset($imageUrl))
        <img src="{{ $imageUrl }}" alt="Anime Image">
    @else
        <p>No image available</p>
    @endif
</body>
</html>
