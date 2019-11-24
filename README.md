# API.NET_Core3.0
API .NET Core 3.0

Diferenças:

WEB extremamente vazio parecido com projeto de console Cru

MVC tem conceito de MVC Controller Models e View (Razor no Front)

API tem conceito de Controller metodos http

Injeção de dependencia
Midleware
HttpMethods
EntityFramework
Sqlite
Nuget Packet Maneger
Async and Await Methods


dotnet tool install --global dotnet-ef --version 3.0.0

dotnet-ef


Your startup project 'ProAgil.API' doesn't reference Microsoft.EntityFrameworkCore.Design. This package is required for the Entity Framework Core Tools to work. Ensure your startup project is correct, install the package, and try again.

Nuget Packet Maneger
add Microsoft.EntityFrameworkCore.Design

https://sqlitebrowser.org/

sqlitebrowser

Debian
Note that Debian focuses more on stability rather than newest features. Therefore packages will typically contain some older version, compared to the latest release.

Update the cache using:

sudo apt-get update
Install the package using:

sudo apt-get install sqlitebrowser
